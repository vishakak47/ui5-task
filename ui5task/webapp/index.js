sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function(ComponentContainer) {
    new ComponentContainer({
        name: "ui5task",
        settings: {
            id: "ui5task"
        },
        async: true
    }).placeAt('content');
});
