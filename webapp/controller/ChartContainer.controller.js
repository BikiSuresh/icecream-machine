sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/base/strings/formatMessage"
    ],
    function(Controller, formatMessage) {
      "use strict";
  
      return Controller.extend("sap.ui.custom.icecreammachine.controller.ChartContainer", {
        onInit() {
          console.log("debug");
        },
        formatMessage: formatMessage,
        onNavButtonPressed: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo('home');
        }
      });
    }
  );
  