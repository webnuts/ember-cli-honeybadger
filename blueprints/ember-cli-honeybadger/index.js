module.exports = {
    normalizeEntityName: function() {}, // no-op since we're just adding dependencies

    afterInstall: function() {
        return this.addBowerPackageToProject('honeybadger.js', '^0.4.2');
    }
};
