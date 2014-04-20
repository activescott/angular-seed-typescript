/*jshint node:true */
'use strict';
var path = require('path');

var Folder = function (folder) {
    this.folder = folder;
};

Folder.prototype = {

    allFilesPattern: function () {
        return path.join(this.folder, '**/*');
    },

    allJsFilesPattern: function () {
        return this.getFilePattern('js');
    },

    allTsFilesPattern: function () {
        return this.getFilePattern('ts');
    },

    exclude: function () {
        return new Folder('!' + this.folder);
    },

    getFilePattern: function (extension) {
        return path.join(this.folder, '**/*.' + extension);
    },

    getFilePath: function (file) {
        return path.join(this.folder,  file);
    },

    dir: function (folderName) {
        if (folderName) {
            return this.getFilePath(folderName);
        }
        return this.folder;
    }
};

var paths = {
    client: new Folder('client'),
    server: new Folder('server'),
    out: {
        root: new Folder('out'),
        server: new Folder('out/server'),
        client: new Folder('out/client')
    },
    bower_components: new Folder('bower_components')
};

module.exports = paths;
