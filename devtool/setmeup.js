module.exports = function(config) {
    this.entry = {
        index: config.Path.join(__dirname, "./", "src/", "assets/", "js/", "Controller", "IndexController.js"),
        vendor: config.Path.join(__dirname, "./", "src/", "assets/", "js/", "Controller", "VendorController.js")
    };

    this.alias = {
        SassPath: config.Path.resolve(__dirname, './src/assets/scss/'),
        ViewPath: config.Path.resolve(__dirname, './src/assets/js/View/'),
        ModelPath: config.Path.resolve(__dirname, './src/assets/js/Model/'),
        LibrariesPath: config.Path.resolve(__dirname, './src/assets/js/Libraries/'),
        ControllerPath: config.Path.resolve(__dirname, './src/assets/js/Controller/')
    };

    this.copyFiles = {
        to: config.Path.join(__dirname, "./", "../", "web/", "images/"),
        from: config.Path.join(__dirname, "./", "src/", "assets/", "images/")
    };

    this.createHtml = function() {
        return [
            new config.HtmlWebpackPlugin({
                title: 'Index',
                inject: false,
                template: config.Path.join(
                    __dirname,
                    "src/",
                    "assets/",
                    "js/",
                    "View/",
                    "Templates/",
                    "Html/",
                    "index.html"
                ),
                filename: config.Path.join(
                    __dirname,
                    "../",
                    "web/",
                    "index.html"
                ),
            })
        ];
    };
}
