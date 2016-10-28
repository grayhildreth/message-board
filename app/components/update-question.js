import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        pregunta: this.get('pregunta'),
        additional: this.get('additional'),
        author: this.get('author'),

      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
