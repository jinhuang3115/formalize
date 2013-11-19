var $ = require('jquery');
var eventy = require('eventy');

module.exports = function Select(element) {
  if (element.__iniSelect) throw new Error('initialized element already');
  eventy(element);

  element.addEventListener('click', onClick, true);
  var len = $('.optionGroup',element).children().length;
  function click (click){
      var e = e||window.event;
      if (e.target.className == 'selectDefautl'){
        showOtions();
      }else {
        if (e.target.className == "options"){
          $('.selectDefautl').html(e.target.innerHTML);
          hideOptions();
        }
      }
  }


function showOtions(){
  $('ul.options').show();
}
function hideOptions(){
  $('ul.options').hide();
}
   /*
    Returns which type of form element this Select button is
    @return String
  */
  Object.defineProperty(element, 'type', {
    value: 'select'
  })

  /*
    Sets or returns whether this select button is disabled or not
    @return Boolean
  */
  Object.defineProperty(element, 'disabled', {
    get: function () {
      if (element.hasAttribute('disabled')) return true;
      else return false;
    },

    set: function (value) {
      if (value) {
        element.setAttribute('disabled', '');
        element.trigger('disabled').trigger('change');
      } else {
        element.removeAttribute('disabled');
        element.trigger('enabled').trigger('change');
      }
    }
  })

  /*
    return options length
    @return number
  */

 Object.options.defineProperty(element, 'length', {
    length: function(){
      return len;
    }
 }
  /*
    return the selected option
    @return target
  */
  Object.options.defineProperty(element, 'selectedIndex', {
    selectedIndex: function(){
     return $('.options').index($('.options' ['type' = 'select']));
    }
 }
  /*
    add new option
  */
  Object.options.defineProperty(element, 'add', {
    add: function(ele,index){
      if (index >= len){
          $(ele).appendTo($('.optionGroup',element));
        }else {
          $(ele).insertBefore($('options',element)eq(index));
        }
    }
 }
  /*
    return the index of options
    @return target
  */
  Object.options.defineProperty(element, 'item', {
    item: function(index){
      return $('options',element)[index];
    }
 }
  /*
    
  */
   Object.options.defineProperty(element, 'namedItem', {
    namedItem: function(){
    
    }
 }
  /*
    remove the index of options
  */
   Object.options.defineProperty(element, 'remove', {
    remove: function(index){
      $('.options')[index].remove();
    }
 }

 /*
    Sets or returns the value of the name atrribute of this select button
    @return String
  */
  Object.defineProperty(element, 'name', {
    get: function () {
      if (element.hasAttribute('name')) return element.getAttribute('name');
      else return '';
    },

    set: function (value) {
      element.setAttribute('name', value);
      element.trigger('change');
    }
  })


 /*
    Returns a reference to the form that contains this select button
    @return Object
  */
  Object.defineProperty(element, 'form', {
    value: (function () {
      var parents = getParents(element);

      for (var i in parents) {
        if (parents[i].tagName === 'FORM') return parents[i];
      }

      return null;
    }())
  })

   /*
    Sets or returns the value of the name atrribute of this select button
    @return String
  */
  Object.defineProperty(element, 'name', {
    get: function () {
      if (element.hasAttribute('name')) return element.getAttribute('name');
      else return '';
    },

    set: function (value) {
      element.setAttribute('name', value);
      element.trigger('change');
    }
  })

 /*
    remove the first option
  */
  Object.defineProperty(element, 'remove', {
    remove:function({
      $('.options',element)[0].remove();
      $('.selectDefautl').html($('.options',element)[0].html());
    })
  })

  /*
    return the selected option
    return target
  */
  Object.defineProperty(element, 'selectedIndex', {
    selectedIndex:function(){
      return $('.options').index($('.options' ['type' = 'select']));
    }
  })

  Object.defineProperty(element, 'multiple', {
     
  })

  /*
    add new option to optionGroup
  */
  Object.defineProperty(element, 'add', {
    add :function(option,before){
    if (before){
      $(option).insertBefore($('.options',element)eq(0));
    }else {
      $(option).appendTo($('.optionGroup',element));
    }
    }
  })

  element.on('change', function () {
    element.className = element.className;
  });

  element.__initSelect = true;
  return element;
