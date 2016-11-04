import Ember from 'ember';

export default Ember.Component.extend({
  answerCount: Ember.computed('question.answers', function() {
    var answerTotal = this.get('question.answers.length');
    return answerTotal;
    })
  });
