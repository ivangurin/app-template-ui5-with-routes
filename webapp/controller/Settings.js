sap.ui.define([
  "sap/ui/base/ManagedObject",
  "sap/ui/core/Fragment"
], function (ManagedObject, Fragment) {
    
    "use strict"

    return ManagedObject.extend("su.gurin.project1.controller.Settings", {

        constructor: function (oView) {
            this._oView = oView
        },

        exit: function () {
            delete this._oView;
        },

        open: function () {

            var oView = this._oView;

            // create the dialog lazily
            if (oView.byId("settingsDialog")) {

                oView.byId("settingsDialog").open();                

            } else {

                // load asynchronous XML fragment
                Fragment.load({
                    id: oView.getId(),
                    name: "su.gurin.project1.view.Settings",
                    controller: this
                }).then(function (oDialog) {
                    // connect dialog to the root view of the component (models, lifecycle)
                    oView.addDependent(oDialog);
                    oDialog.open();
                })                

            }
        
        },
        
        onClose: function() {

            var oView = this._oView;

            oView.byId("settingsDialog").close()

        }
  
    });

});