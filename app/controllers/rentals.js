import Ember from 'ember';
import PowerSelect from 'ember-power-select/components/power-select';

export default Ember.Controller.extend({
  
/*  
  names: ['Stefan', 'Miguel', 'Tomster', 'Pluto'],
  actions: {
    foo() { }
  }
});
*/  
  //names: ['Stefan', 'Miguel', 'Tomster', 'Pluto'],
  actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.get('store').query('rental', { city: param });
      } else {
        return this.get('store').findAll('rental');
      }
    }
  },
    /*selectName(param){
      this.set('names', name);
  },*/
});

