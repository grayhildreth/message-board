import Ember from 'ember';

var questions = [{
  pregunta: "Best place to camp?",
  additional: "Coming down in January.",
  author: "Mick Jones"
}, {
  pregunta: "Where are th best fish tacos in Baja?",
  additional: "I love Mexican food!",
  author: "Paul Simonon"
}, {
  pregunta: "Where are the best surf breaks?",
  additional: "I've heard Todos Santos is the best.",
  author: "John Mellor"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
