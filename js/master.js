class Navbar {
  constructor(icon, menu) {
    this.icon = icon;
    this.menu = menu;
  }

  toggle() {
    this.icon.classList.toggle("active");    
    this.menu.forEach(el => {
      el.classList.toggle("show");
    });
  }
}

let get = el => document.querySelector(`${el}`);
let getAll = el => document.querySelectorAll(`${el}`);

document.querySelector(".menu-toggle").addEventListener("click", _ => {
  new Navbar(get(".menu-toggle"), getAll("header nav ul li")).toggle();
});

class FAQ {
  constructor(container) {
    this.container = container;
    this.rows = container.querySelectorAll('.row');
    this.init();
  }

  init() {
    this.rows.forEach(row => {
      const question = row.querySelector('.q');

      question.addEventListener('click', _ => {
        this.toggleAnswer(row);
      });
    });
  }

  toggleAnswer(row) {
    // Close all other answers
    this.rows.forEach(r => {
      if (r !== row) {
        r.classList.remove('show-ans');
      }
    });

    // Toggle current answer
    row.classList.toggle('show-ans');
  }
}

new FAQ(document.querySelector('#faq-box'));