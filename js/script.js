let filmButtons = document.querySelectorAll('[data-film-id]');

let films = [
  { id: '11', rating: '8.1' },
  { id: '12', rating: '7.5' },
  { id: '13', rating: '9.0' },
  { id: '14', rating: '6.8' },
  { id: '15', rating: '8.9' },
  { id: '16', rating: '7.2' }
];


filmButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    let filmItem = event.target.closest(".film__item");
    let filmRatingBlock = document.querySelector('.film__rating');
    let filmId = button.dataset.filmId;
    let film = films.find(function(item) {
      return item.id === filmId;
    });
    if (film) {
      let filmRatingBlock = filmItem.querySelector('.film__rating');
      filmRatingBlock.textContent = film.rating;
      filmRatingBlock.style.opacity = 1;
    }
  });
});


let bookButtons = document.querySelectorAll('[data-book-id]');

let books = [
  { id: '51', rating: '9.1' },
  { id: '52', rating: '7.5' },
  { id: '53', rating: '9.0' },
  { id: '54', rating: '6.8' },
  { id: '55', rating: '4.9' },
  { id: '56', rating: '8.2' }
];


bookButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    let bookItem = event.target.closest(".book__item");
    let bookRatingBlock = document.querySelector('.book__rating');
    let bookId = button.dataset.bookId;
    let book = books.find(function(item) {
      return item.id === bookId;
    });
    if (book) {
      let bookRatingBlock = bookItem.querySelector('.book__rating');
      bookRatingBlock.textContent = book.rating;
      bookRatingBlock.style.opacity = 1;
    }
  });
});
