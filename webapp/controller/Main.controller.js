sap.ui.define(
    ["sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"],
    function (
        Controller,	
        JSONModel, 
        MessageToast
        ) {

        "use strict";

        return Controller.extend("su.gurin.project1.controller.Main", {

            onInit: function () {

                var oData = {
                    name: "Ivan"          
                };

                var oModel = new JSONModel(oData);

                this.getView().setModel(oModel, "person");

            },

            onButton1Press: function() {

                MessageToast.show("Hello world!")

            },

            onButton2Press: function() {


                // read msg from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sPersonName = this.getView().getModel("person").getProperty("/name");
                var sMsg = oBundle.getText("helloMsg", [sPersonName]);
            
                // Show message
                MessageToast.show(sMsg);
            

            },

            onOpenSettingsDialog: function() {
        
                this.getOwnerComponent().openSettingsDialog();

            },

            onOpenNextPage: function() {

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                oRouter.navTo("next", {id: Math.floor(Math.random() * 100)});

            }

        });
    }
);
