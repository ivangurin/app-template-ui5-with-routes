sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "su/gurin/project1/model/models",
        "./controller/Settings"
    ],
    function (UIComponent, Device, models, Settings) {
        "use strict";

        return UIComponent.extend("su.gurin.project1.Component", {
            metadata: {
                manifest: "json"
            },

            init: function () {

                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                // set settings dialog
                this._settingsDialog = new Settings(this.getRootControl());

                // enable routing
                this.getRouter().initialize();

            },

            exit: function () {

                this._settingsDialog.destroy();

                delete this._settingsDialog;

            },

            openSettingsDialog : function () {
             
                this._settingsDialog.open();
            
            }

        });
    }
);