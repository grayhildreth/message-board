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
  pregunta: "When is the best time of year to visit?",
  additional: "I've heard winter is the best.",
  author: "John Mellor"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
