"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avatars = exports.storage = exports.databases = exports.account = exports.client = exports.appwriteConfig = void 0;
// database setup for appwrite
var appwrite_1 = require("appwrite");
exports.appwriteConfig = {
    url: import.meta.env.VITE_APPWRITE_URL,
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
    savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
};
// create instance of client
exports.client = new appwrite_1.Client();
// configure client
exports.client.setEndpoint(exports.appwriteConfig.url);
exports.client.setProject(exports.appwriteConfig.projectId);
// pass client into account, db, storage, and avatars
exports.account = new appwrite_1.Account(exports.client);
exports.databases = new appwrite_1.Databases(exports.client);
exports.storage = new appwrite_1.Storage(exports.client);
exports.avatars = new appwrite_1.Avatars(exports.client);
