sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History"
    ], 
    function(
        Controller, 
        JSONModel, 
        UIComponent, 
        History
        ) {

        "use strict";

        return Controller.extend("su.gurin.project1.controller.Next", {

            onInit: function(){

                var oData = {
                    id: ""
                };
                
                var oModel = new JSONModel(oData);
                
                this.getView().setModel(oModel, "parameters");

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("next").attachPatternMatched(this._onObjectMatched, this);

            },

            _onObjectMatched: function (oEvent) {

                var sId = oEvent.getParameter("arguments").id;

                this.getView().getModel("parameters").setProperty("/id", sId);

            },

            onNavBack: function(){

                var oHistory = History.getInstance();

                var sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1)
                } else {
                    var oRouter = UIComponent.getRouterFor(this);
                    oRouter.navTo("main")
                }

            }

        });

    }
);