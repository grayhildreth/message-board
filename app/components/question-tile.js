import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestion: Ember.inject.service(),

  actions: {
    addToFavorites(question) {
      this.get('favoriteQuestion').add(question);
    },

  answerCount: Ember.computed('question.answers', function() {
    var answerTotal = this.get('question.answers.length');
    return answerTotal;
    })
  }
  });
