import DS from 'ember-data';

export default DS.Model.extend({
  pregunta: DS.attr(),
  additional: DS.attr(),
  author: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
