sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"

],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("ui5task.controller.View1", {
            onInit: function () {
                //this.getView().setModel(new JSONModel(invoice))
                let invoicesModel = new JSONModel();
                invoicesModel.loadData('game.json').then(
                    () => {
                        console.log(invoicesModel.getData());
                    }, (err) => {
                        console.log("Error occurued. " + err.toString());
                    }
                );

            }
        });
    });
