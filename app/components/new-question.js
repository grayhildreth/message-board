import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion1() {
      var params = {
        pregunta: this.get('pregunta') ? this.get('pregunta') : "",
        additional: this.get('additional') ? this.get('additional') : "",
        author: this.get('author') ? this.get('author') : "",
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});
