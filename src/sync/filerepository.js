﻿function getValidFileName(path) {

    // TODO
    return path;
}


function getFullLocalPath(pathArray) {

    // TODO
    return pathArray.join('/');

}

function getPathFromArray(pathArray) {

    // TODO
    return pathArray.join('/');

}

function deleteFile(path) {
    return Promise.resolve();
}

function deleteDirectory(path) {
    return Promise.resolve();
}

function fileExists(path) {
    return Promise.resolve();
}

function getItemFileSize(path) {
    return Promise.resolve(0);
}

function getImageUrl(pathParts) {
    return pathParts.join('/');
}

export default {
    getValidFileName,
    getFullLocalPath,
    getPathFromArray,
    deleteFile,
    deleteDirectory,
    fileExists,
    getItemFileSize,
    getImageUrl
};