'use strict';

class BookCreateController {
  
  constructor(Auth, $state) {
    this.$state = $state;
  }

  register(form) {
    this.submitted = true;

    if (form.$valid) {
      this.createBook({
          name: this.book.name,
          author: this.book.author,
          publisher: this.book.publisher
        })
      .then(() => {
          // Account created, redirect to home
          this.$state.go('main');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
        });
});
    }
}
}

angular.module('booksnigeriaApp')
  .controller('BookCreateController',BookCreateComponent);


