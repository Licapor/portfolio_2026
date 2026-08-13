/**
 * Efecto de decodificado: reemplaza el texto carácter por carácter pasando por
 * caracteres basura antes de asentarse. Lo usan el ciclo de identidades del hero
 * y los nombres de grupo del manifest de Skills.
 *
 * Los caracteres intermedios se envuelven en <span class="dud">, que se estiliza
 * en global.css: los estilos scoped de Astro no alcanzan a lo que se inyecta en
 * runtime.
 */
const CHARS = '!<>-_\\/[]{}—=+*^?#________';

export class Scramble {
  el: HTMLElement;
  text = '';
  queue: { from: string; to: string; start: number; end: number; char: string | null }[] = [];
  frame = 0;
  raf = 0;
  resolve: (() => void) | null = null;

  constructor(el: HTMLElement) {
    this.el = el;
    this.update = this.update.bind(this);
  }

  setText(newText: string) {
    const oldC = Array.from(this.text);
    const newC = Array.from(newText);
    const len = Math.max(oldC.length, newC.length);
    this.text = newText;
    this.queue = [];
    for (let i = 0; i < len; i++) {
      const from = oldC[i] || '';
      const to = newC[i] || '';
      const start = Math.floor(Math.random() * 20);
      const end = start + 16 + Math.floor(Math.random() * 30);
      this.queue.push({ from, to, start, end, char: null });
    }
    cancelAnimationFrame(this.raf);
    this.frame = 0;
    return new Promise<void>((res) => {
      this.resolve = res;
      this.update();
    });
  }

  update() {
    let out = '';
    let done = 0;
    for (const q of this.queue) {
      if (this.frame >= q.end) {
        done++;
        out += q.to;
      } else if (this.frame >= q.start) {
        if (!q.char || Math.random() < 0.28) {
          q.char = CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        out += `<span class="dud">${q.char}</span>`;
      } else {
        out += q.from;
      }
    }
    this.el.innerHTML = out;
    if (done === this.queue.length) {
      this.resolve?.();
    } else {
      this.frame++;
      this.raf = requestAnimationFrame(this.update);
    }
  }
}
