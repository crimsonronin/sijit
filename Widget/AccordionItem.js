define([
    'dojo/_base/declare',
    'dojo/dom-class',
    'dijit/_Widget',
    'dijit/_TemplatedMixin',
    'dojo/text!./Template/AccordionItem.html'
],
function(
    declare,
    domClass,
    Widget,
    TemplatedMixin,
    template
){
    // module:
    //		Sds/Widget/AccordionItem

    return declare
    (
        [Widget, TemplatedMixin],
        {
            // summary:
            //		A widget to populate Sds/Widget/Accordion

            //accordion: undefined,

            //title: undefined,

            templateString: template,

            click: function(e){
                if (e){
                    e.preventDefault();
                }
                this.set('hidden', false);
            },

            _setHiddenAttr: function(value){
                if (value){
                    domClass.add(this.containerNode, 'hide');
                } else {
                    domClass.remove(this.containerNode, 'hide');
                }
                this._set('hidden', value);
            },

            _getHiddentAttr: function(){
                return domClass.contains(this.containerNode, 'hide');
            }
        }
    );
});