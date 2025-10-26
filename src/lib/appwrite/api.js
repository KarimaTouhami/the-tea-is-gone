"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserAccount = createUserAccount;
exports.saveUserToDB = saveUserToDB;
exports.signInAccount = signInAccount;
exports.getAccount = getAccount;
exports.getCurrentUser = getCurrentUser;
exports.signOutAccount = signOutAccount;
exports.createPost = createPost;
exports.uploadFile = uploadFile;
exports.getFilePreview = getFilePreview;
exports.deleteFile = deleteFile;
exports.searchPosts = searchPosts;
exports.getInfinitePosts = getInfinitePosts;
exports.getPostById = getPostById;
exports.updatePost = updatePost;
exports.deletePost = deletePost;
exports.likePost = likePost;
exports.savePost = savePost;
exports.deleteSavedPost = deleteSavedPost;
exports.getUserPosts = getUserPosts;
exports.getRecentPosts = getRecentPosts;
exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
var appwrite_1 = require("appwrite");
var config_1 = require("./config");
// ============================================================
// AUTH
// ============================================================
// ============================== SIGN UP
function createUserAccount(user) {
    return __awaiter(this, void 0, void 0, function () {
        var newAccount, avatarUrl, newUser, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, config_1.account.create(appwrite_1.ID.unique(), user.email, user.password, user.name)];
                case 1:
                    newAccount = _a.sent();
                    if (!newAccount)
                        throw Error;
                    avatarUrl = config_1.avatars.getInitials(user.name);
                    return [4 /*yield*/, saveUserToDB({
                            accountId: newAccount.$id,
                            name: newAccount.name,
                            email: newAccount.email,
                            username: user.username,
                            imageUrl: avatarUrl,
                        })];
                case 2:
                    newUser = _a.sent();
                    return [2 /*return*/, newUser];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [2 /*return*/, error_1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// ============================== SAVE USER TO DB
function saveUserToDB(user) {
    return __awaiter(this, void 0, void 0, function () {
        var newUser, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, config_1.databases.createDocument(config_1.appwriteConfig.databaseId, config_1.appwriteConfig.userCollectionId, appwrite_1.ID.unique(), user)];
                case 1:
                    newUser = _a.sent();
                    return [2 /*return*/, newUser];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// ============================== SIGN IN
function signInAccount(user) {
    return __awaiter(this, void 0, void 0, function () {
        var session, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, config_1.account.createEmailSession(user.email, user.password)];
                case 1:
                    session = _a.sent();
                    return [2 /*return*/, session];
                case 2:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// ============================== GET ACCOUNT
function getAccount() {
    return __awaiter(this, void 0, void 0, function () {
        var currentAccount, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, config_1.account.get()];
                case 1:
                    currentAccount = _a.sent();
                    return [2 /*return*/, currentAccount];
                case 2:
                    error_4 = _a.sent();
                    console.log(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// ============================== GET USER
function getCurrentUser() {
    return __awaiter(this, void 0, void 0, function () {
        var currentAccount, currentUser, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, getAccount()];
                case 1:
                    currentAccount = _a.sent();
                    if (!currentAccount)
                        throw Error;
                    return [4 /*yield*/, config_1.databases.listDocuments(config_1.appwriteConfig.databaseId, config_1.appwriteConfig.userCollectionId, [appwrite_1.Query.equal("accountId", currentAccount.$id)])];
                case 2:
                    currentUser = _a.sent();
                    if (!currentUser)
                        throw Error;
                    return [2 /*return*/, currentUser.documents[0]];
                case 3:
                    error_5 = _a.sent();
                    console.log(error_5);
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// ============================== SIGN OUT
function signOutAccount() {
    return __awaiter(this, void 0, void 0, function () {
        var session, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, config_1.account.deleteSession("current")];
                case 1:
                    session = _a.sent();
                    return [2 /*return*/, session];
                case 2:
                    error_6 = _a.sent();
                    console.log(error_6);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// ============================================================
// POSTS
// ============================================================
// ============================== CREATE POST
function createPost(post) {
    return __awaiter(this, void 0, void 0, function () {
        var uploadedFile, fileUrl, tags, newPost, error_7;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 7, , 8]);
                    return [4 /*yield*/, uploadFile(post.file[0])];
                case 1:
                    uploadedFile = _b.sent();
                    if (!uploadedFile)
                        throw Error;
                    fileUrl = getFilePreview(uploadedFile.$id);
                    if (!!fileUrl) return [3 /*break*/, 3];
                    return [4 /*yield*/, deleteFile(uploadedFile.$id)];
                case 2:
                    _b.sent();
                    throw Error;
                case 3:
                    tags = ((_a = post.tags) === null || _a === void 0 ? void 0 : _a.replace(/ /g, "").split(",")) || [];
                    return [4 /*yield*/, config_1.databases.createDocument(config_1.appwriteConfig.databaseId, config_1.appwriteConfig.postCollectionId, appwrite_1.ID.unique(), {
                            creator: post.userId,
                            caption: post.caption,
                            imageUrl: fileUrl,
                            imageId: uploadedFile.$id,
                            location: post.location,
                            tags: tags,
                        })];
                case 4:
                    newPost = _b.sent();
                    if (!!newPost) return [3 /*break*/, 6];
                    return [4 /*yield*/, deleteFile(uploadedFile.$id)];
                case 5:
                    _b.sent();
                    throw Error;
                case 6: return [2 /*return*/, newPost];
                case 7:
                    error_7 = _b.sent();
                    console.log(error_7);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
// ============================== UPLOAD FILE
function uploadFile(file) {
    return __awaiter(this, void 0, void 0, function () {
        var uploadedFile, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, config_1.storage.createFile(config_1.appwriteConfig.storageId, appwrite_1.ID.unique(), file)];
                case 1:
                    uploadedFile = _a.sent();
                    return [2 /*return*/, uploadedFile];
                case 2:
                    error_8 = _a.sent();
                    console.log(error_8);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// ============================== GET FILE URL
function getFilePreview(fileId) {
    try {
        var fileUrl = config_1.storage.getFilePreview(config_1.appwriteConfig.storageId, fileId, 2000, 2000, "top", 100);
        if (!fileUrl)
            throw Error;
        return fileUrl;
    }
    catch (error) {
        console.log(error);
    }
}
// ============================== DELETE FILE
function deleteFile(fileId) {
    return __awaiter(this, void 0, void 0, function () {
        var error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, config_1.storage.deleteFile(config_1.appwriteConfig.storageId, fileId)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, { status: "ok" }];
                case 2:
                    error_9 = _a.sent();
                    console.log(error_9);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// ============================== GET POSTS
function searchPosts(searchTerm) {
    return __awaiter(this, void 0, void 0, function () {
        var posts, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, config_1.databases.listDocuments(config_1.appwriteConfig.databaseId, config_1.appwriteConfig.postCollectionId, [appwrite_1.Query.search("caption", searchTerm)])];
                case 1:
                    posts = _a.sent();
                    if (!posts)
                        throw Error;
                    return [2 /*return*/, posts];
                case 2:
                    error_10 = _a.sent();
                    console.log(error_10);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getInfinitePosts(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var queries, posts, error_11;
        var pageParam = _b.pageParam;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    queries = [appwrite_1.Query.orderDesc("$updatedAt"), appwrite_1.Query.limit(9)];
                    if (pageParam) {
                        queries.push(appwrite_1.Query.cursorAfter(pageParam.toString()));
                    }
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, config_1.databases.listDocuments(config_1.appwriteConfig.databaseId, config_1.appwriteConfig.postCollectionId, queries)];
                case 2:
                    posts = _c.sent();
                    if (!posts)
                        throw Error;
                    return [2 /*return*/, posts];
                case 3:
                    error_11 = _c.sent();
                    console.log(error_11);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// ============================== GET POST BY ID
function getPostById(postId) {
    return __awaiter(this, void 0, void 0, function () {
        var post, error_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!postId)
                        throw Error;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, config_1.databases.getDocument(config_1.appwriteConfig.databaseId, config_1.appwriteConfig.postCollectionId, postId)];
                case 2:
                    post = _a.sent();
                    if (!post)
                        throw Error;
                    return [2 /*return*/, post];
                case 3:
                    error_12 = _a.sent();
                    console.log(error_12);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// ============================== UPDATE POST
function updatePost(post) {
    return __awaiter(this, void 0, void 0, function () {
        var hasFileToUpdate, image, uploadedFile, fileUrl, tags, updatedPost, error_13;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    hasFileToUpdate = post.file.length > 0;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 12, , 13]);
                    image = {
                        imageUrl: post.imageUrl,
                        imageId: post.imageId,
                    };
                    if (!hasFileToUpdate) return [3 /*break*/, 5];
                    return [4 /*yield*/, uploadFile(post.file[0])];
                case 2:
                    uploadedFile = _b.sent();
                    if (!uploadedFile)
                        throw Error;
                    fileUrl = getFilePreview(uploadedFile.$id);
                    if (!!fileUrl) return [3 /*break*/, 4];
                    return [4 /*yield*/, deleteFile(uploadedFile.$id)];
                case 3:
                    _b.sent();
                    throw Error;
                case 4:
                    image = __assign(__assign({}, image), { imageUrl: fileUrl, imageId: uploadedFile.$id });
                    _b.label = 5;
                case 5:
                    tags = ((_a = post.tags) === null || _a === void 0 ? void 0 : _a.replace(/ /g, "").split(",")) || [];
                    return [4 /*yield*/, config_1.databases.updateDocument(config_1.appwriteConfig.databaseId, config_1.appwriteConfig.postCollectionId, post.postId, {
                            caption: post.caption,
                            imageUrl: image.imageUrl,
                            imageId: image.imageId,
                            location: post.location,
                            tags: tags,
                        })];
                case 6:
                    updatedPost = _b.sent();
                    if (!!updatedPost) return [3 /*break*/, 9];
                    if (!hasFileToUpdate) return [3 /*break*/, 8];
                    return [4 /*yield*/, deleteFile(image.imageId)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8: 
                // If no new file uploaded, just throw error
                throw Error;
                case 9:
                    if (!hasFileToUpdate) return [3 /*break*/, 11];
                    return [4 /*yield*/, deleteFile(post.imageId)];
                case 10:
                    _b.sent();
                    _b.label = 11;
                case 11: return [2 /*return*/, updatedPost];
                case 12:
                    error_13 = _b.sent();
                    console.log(error_13);
                    return [3 /*break*/, 13];
                case 13: return [2 /*return*/];
            }
        });
    });
}
// ============================== DELETE POST
function deletePost(postId, imageId) {
    return __awaiter(this, void 0, void 0, function () {
        var statusCode, error_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!postId || !imageId)
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, config_1.databases.deleteDocument(config_1.appwriteConfig.databaseId, config_1.appwriteConfig.postCollectionId, postId)];
                case 2:
                    statusCode = _a.sent();
                    if (!statusCode)
                        throw Error;
                    return [4 /*yield*/, deleteFile(imageId)];
                case 3:
                    _a.sent();
                    return [2 /*return*/, { status: "Ok" }];
                case 4:
                    error_14 = _a.sent();
                    console.log(error_14);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// ============================== LIKE / UNLIKE POST
function likePost(postId, likesArray) {
    return __awaiter(this, void 0, void 0, function () {
        var updatedPost, error_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, config_1.databases.updateDocument(config_1.appwriteConfig.databaseId, config_1.appwriteConfig.postCollectionId, postId, {
                            likes: likesArray,
                        })];
                case 1:
                    updatedPost = _a.sent();
                    if (!updatedPost)
                        throw Error;
                    return [2 /*return*/, updatedPost];
                case 2:
                    error_15 = _a.sent();
                    console.log(error_15);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// ============================== SAVE POST
function savePost(userId, postId) {
    return __awaiter(this, void 0, void 0, function () {
        var updatedPost, error_16;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, config_1.databases.createDocument(config_1.appwriteConfig.databaseId, config_1.appwriteConfig.savesCollectionId, appwrite_1.ID.unique(), {
                            user: userId,
                            post: postId,
                        })];
                case 1:
                    updatedPost = _a.sent();
                    if (!updatedPost)
                        throw Error;
                    return [2 /*return*/, updatedPost];
                case 2:
                    error_16 = _a.sent();
                    console.log(error_16);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// ============================== DELETE SAVED POST
function deleteSavedPost(savedRecordId) {
    return __awaiter(this, void 0, void 0, function () {
        var statusCode, error_17;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, config_1.databases.deleteDocument(config_1.appwriteConfig.databaseId, config_1.appwriteConfig.savesCollectionId, savedRecordId)];
                case 1:
                    statusCode = _a.sent();
                    if (!statusCode)
                        throw Error;
                    return [2 /*return*/, { status: "Ok" }];
                case 2:
                    error_17 = _a.sent();
                    console.log(error_17);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// ============================== GET USER'S POST
function getUserPosts(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var post, error_18;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!userId)
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, config_1.databases.listDocuments(config_1.appwriteConfig.databaseId, config_1.appwriteConfig.postCollectionId, [appwrite_1.Query.equal("creator", userId), appwrite_1.Query.orderDesc("$createdAt")])];
                case 2:
                    post = _a.sent();
                    if (!post)
                        throw Error;
                    return [2 /*return*/, post];
                case 3:
                    error_18 = _a.sent();
                    console.log(error_18);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// ============================== GET POPULAR POSTS (BY HIGHEST LIKE COUNT)
function getRecentPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var posts, error_19;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, config_1.databases.listDocuments(config_1.appwriteConfig.databaseId, config_1.appwriteConfig.postCollectionId, [appwrite_1.Query.orderDesc("$createdAt"), appwrite_1.Query.limit(20)])];
                case 1:
                    posts = _a.sent();
                    if (!posts)
                        throw Error;
                    return [2 /*return*/, posts];
                case 2:
                    error_19 = _a.sent();
                    console.log(error_19);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// ============================================================
// USER
// ============================================================
// ============================== GET USERS
function getUsers(limit) {
    return __awaiter(this, void 0, void 0, function () {
        var queries, users, error_20;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    queries = [appwrite_1.Query.orderDesc("$createdAt")];
                    if (limit) {
                        queries.push(appwrite_1.Query.limit(limit));
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, config_1.databases.listDocuments(config_1.appwriteConfig.databaseId, config_1.appwriteConfig.userCollectionId, queries)];
                case 2:
                    users = _a.sent();
                    if (!users)
                        throw Error;
                    return [2 /*return*/, users];
                case 3:
                    error_20 = _a.sent();
                    console.log(error_20);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// ============================== GET USER BY ID
function getUserById(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var user, error_21;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, config_1.databases.getDocument(config_1.appwriteConfig.databaseId, config_1.appwriteConfig.userCollectionId, userId)];
                case 1:
                    user = _a.sent();
                    if (!user)
                        throw Error;
                    return [2 /*return*/, user];
                case 2:
                    error_21 = _a.sent();
                    console.log(error_21);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// ============================== UPDATE USER
function updateUser(user) {
    return __awaiter(this, void 0, void 0, function () {
        var hasFileToUpdate, image, uploadedFile, fileUrl, updatedUser, error_22;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hasFileToUpdate = user.file.length > 0;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 12, , 13]);
                    image = {
                        imageUrl: user.imageUrl,
                        imageId: user.imageId,
                    };
                    if (!hasFileToUpdate) return [3 /*break*/, 5];
                    return [4 /*yield*/, uploadFile(user.file[0])];
                case 2:
                    uploadedFile = _a.sent();
                    if (!uploadedFile)
                        throw Error;
                    fileUrl = getFilePreview(uploadedFile.$id);
                    if (!!fileUrl) return [3 /*break*/, 4];
                    return [4 /*yield*/, deleteFile(uploadedFile.$id)];
                case 3:
                    _a.sent();
                    throw Error;
                case 4:
                    image = __assign(__assign({}, image), { imageUrl: fileUrl, imageId: uploadedFile.$id });
                    _a.label = 5;
                case 5: return [4 /*yield*/, config_1.databases.updateDocument(config_1.appwriteConfig.databaseId, config_1.appwriteConfig.userCollectionId, user.userId, {
                        name: user.name,
                        bio: user.bio,
                        imageUrl: image.imageUrl,
                        imageId: image.imageId,
                    })];
                case 6:
                    updatedUser = _a.sent();
                    if (!!updatedUser) return [3 /*break*/, 9];
                    if (!hasFileToUpdate) return [3 /*break*/, 8];
                    return [4 /*yield*/, deleteFile(image.imageId)];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8: 
                // If no new file uploaded, just throw error
                throw Error;
                case 9:
                    if (!(user.imageId && hasFileToUpdate)) return [3 /*break*/, 11];
                    return [4 /*yield*/, deleteFile(user.imageId)];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11: return [2 /*return*/, updatedUser];
                case 12:
                    error_22 = _a.sent();
                    console.log(error_22);
                    return [3 /*break*/, 13];
                case 13: return [2 /*return*/];
            }
        });
    });
}
