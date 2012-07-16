define
(
    [ 
        'dojo/_base/declare',     
        'dijit/_Widget', 
        'dijit/_TemplatedMixin', 
        'dijit/_WidgetsInTemplateMixin', 
        'dojo/text!./templates/ErrorDialog.html',
        'sds/Dialog'
    ],
    function
    (
        declare, 
        widget, 
        templatedMixin,
        widgetsInTemplateMixin,
        template
    ) 
    {
        return declare
        (
            'sds.services.ErrorService.ErrorDialog', 
            [widget, templatedMixin, widgetsInTemplateMixin], 
            { 
                templateString: template,
                message: undefined,
                show: function()
                {
                    this.errorMessageNode.innerHTML = this.message;                
                    return this.errorDialogNode.show();
                }          
            }
        ); 
    }
);


