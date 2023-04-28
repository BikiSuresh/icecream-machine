sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/base/strings/formatMessage"
], function (Controller, formatMessage, MessageToast) {
    "use strict";

    return Controller.extend("sap.ui.custom.icecreammachine.controller.ProcessFlow",{

        FormatMessage: formatMessage,

        onNavButtonPressed: function () {
            let oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("home");
        },
        getValuesDelta: function (fFirstValue, fSecondValue) {
            return fFirstValue - fSecondValue;
        },
        onNodePressed: function(oEvent) {
            var sItemTitle = oEvent.getParameters().getTitle();
            MessageToast.show(this.getResourceBundle().getText("processFlowNodeClickedMessage", [sItemTitle]));
       },

       getResourceBundle: function() {
           return this.getOwnerComponent().getModel("i18n").getResourceBundle();
       }

    });

});