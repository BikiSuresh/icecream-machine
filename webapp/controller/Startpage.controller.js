sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/format/NumberFormat",
    "sap/base/strings/formatMessage",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, NumberFormat, formatMessage, JSONModel) {
        "use strict";

        return Controller.extend("sap.ui.custom.icecreammachine.controller.Startpage", {
            onInit: function () {
                console.log("Initializing Startpage view.");
                var sDataPath = sap.ui.require.toUrl("sap/ui/custom/icecreammachine/model/data") + "/News.json";
                var oModel = new JSONModel(sDataPath);
                this.getView().setModel(oModel, "news");
            },
            formatMessage: formatMessage,

            getProgress: function (aNodes) {
                console.log(aNodes);
                if (!aNodes || aNodes.length === 0){
                    return 0;
                }

                var iSum = 0;
                for (var i = 0; i < aNodes.length; i++) {
                    iSum += aNodes[i].state === "Positive";
                }
                var fPercent = (iSum / aNodes.length) * 100;
                return fPercent.toFixed(0);
            },

            getEntityCount: function (entities) {
                console.log(entities);
                return entities && entities.length || 0;
            },

            formatNumber: function (value) {
                console.log(value);
                var oFloatFormatter = NumberFormat.getFloatInstance({
                    style: "short",
                    decimals: 1
                });
                return oFloatFormatter.format(value);
            },

            formatJSONDate: function (sDate) {
                var oDate = new Date(Date.parse(sDate));
                return oDate.toLocaleDateString();
            },

            onNavToReviews: function () {
                this.getRouter().navTo("reviews");

            },
            onNavToChartContainer: function () {
                this.getRouter().navTo("chartContainer");

            },
            onNavToProcessFlow: function () {
                this.getRouter().navTo("processFlow");

            },
            getRouter: function () {
                return this.getOwnerComponent().getRouter();
            }
        });
    });
