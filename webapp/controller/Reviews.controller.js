sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/format/DateFormat"
], function (Controller, DataFormat) {
    "use strict";
    return Controller.extend("sap.ui.custom.icecreammachine.controller.Reviews", {

        onInit: function () {
            this.oTimeline = this.byId("timeline");
        },
        formatDateTime: function (date) {
                let oDateInstance = DataFormat.getDateInstance();
                return oDateInstance.format(oDateInstance.parse(date));
        },
        onNavButtonPressed: function () {
            let oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("home");
        },
        onHorizontalSwitchChange: function(oEvent) {
			if (oEvent.getParameter("state")) {
				this.oTimeline.setAxisOrientation("Horizontal");
			} else {
				this.oTimeline.setAxisOrientation("Vertical");
			}
		},
        addReview: function () {
            let oModel = this.getView().getModel("reviews"),
                oData = oModel.getData(),
                oTemplateEntry = oData.UserReviews[0];

            oTemplateEntry.template = false;
            //Add new template entry to beggining
            oData.UserReviews.unshift({
                "user" : "",
                "userPic": "",
                "rating": "10",
                "quote": "",
                "dateTime": "now",
                "template": true
            });
            oModel.setData(oData);
        }


    });
});