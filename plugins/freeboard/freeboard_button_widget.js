freeboard.loadWidgetPlugin({
    "type_name": "button_widget",
    "display_name": "Button Widget",
    "settings": [
        {
            "name": "title",
            "display_name": "Button Text",
            "type": "text"
        },
        {
            "name": "on_click",
            "display_name": "On Click (JavaScript)",
            "type": "calculated"
        }
    ],
    newInstance: function (settings, newInstanceCallback) {
        newInstanceCallback(new buttonWidget(settings));
    }
});

var buttonWidget = function (settings) {
    var self = this;
    var currentSettings = settings;

    var buttonElement = $('<button></button>')
        .html(currentSettings.title)
        .on('click', function () {
            var value = freeboard.evaluate(currentSettings.on_click);
            if (typeof value === "function") {
                value();
            }
        });

    this.render = function (element) {
        $(element).append(buttonElement);
    };

    this.onSettingsChanged = function (newSettings) {
        currentSettings = newSettings;
        $(buttonElement).html(currentSettings.title);
    };

    this.getHeight = function () {
        return 1;
    };

    this.onDispose = function () {
        // Clean up
    };
};
