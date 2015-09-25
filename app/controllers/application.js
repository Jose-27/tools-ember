import Ember from 'ember';

export default Ember.Controller.extend({
setMenuToActive :false,
actions:{
    navActive:function(){
    this.toggleProperty('setMenuToActive')
    }
}
});