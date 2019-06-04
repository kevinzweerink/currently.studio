var SlideShow = function (el) {
  this.container = el;
  this.slides = el.querySelectorAll('.slide');
  this.slideCount = this.slides.length;
  this.index = this.slides.length * 30;
}

SlideShow.prototype.init = function () {
  this.container.addEventListener('click', () => { 
    clearInterval(this.interval)
    this.interval = setInterval(() => { this.advance() }, 5000)
    this.advance() 
  });

  window.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) {
      clearInterval(this.interval)
      this.interval = setInterval(() => { this.advance() }, 5000)
      this.advance()
    } else if (e.keyCode == 37) {
      clearInterval(this.interval)
      this.interval = setInterval(() => { this.advance() }, 5000)
      this.reverse()
    }
  })
  this.interval = setInterval(() => { this.advance() }, 5000)
  this.setState(this.index);
}

SlideShow.prototype._slideIndexForIndex = function (i) {
  return Math.abs(i % this.slideCount);
}

SlideShow.prototype.setState = function (index) {
  const i = this._slideIndexForIndex(index);
  const pi = this._slideIndexForIndex(index - 1)
  const ni = this._slideIndexForIndex(index + 1)
  const c = this.slides[i];
  const p = this.slides[pi];
  const n = this.slides[ni];

  this.slides.forEach(slide => { slide.className = 'slide hidden' });

  c.className = 'slide current';
  p.className = 'slide prev';
  n.className = 'slide next';
}

SlideShow.prototype.advance = function () {
  this.index++;
  this.setState(this.index)
}

SlideShow.prototype.reverse = function () {
  this.index--;
  this.setState(this.index);
}

const ss = new SlideShow(document.querySelector('.slideshow'));
ss.init();

var Animator = function () {
  this.tasks = [];
}

Animator.prototype.loop = function () {
  this.tasks.forEach(task => {
    task();
  });
  window.requestAnimationFrame(() => {
    this.loop();
  });
}

var ani = new Animator();

const windowHeight = window.innerHeight;
const scrollReveals = document.querySelectorAll('.scroll-reveal');

ani.tasks.push(() => {
  const st = -1 * window.scrollY;

  scrollReveals.forEach(sr => {
    const top = sr.getBoundingClientRect().top
    if (top < windowHeight * .85) {
      sr.classList.add('in-view');
    } else {
      sr.classList.remove('in-view');
    }
  })
});

ani.loop();

console.log(`
Thanks for stopping by!

This site is just built with plain old HTML, CSS, and Javascript, but we're comfortable with modern development tools like React, Vue, Webpack, etc.
`)