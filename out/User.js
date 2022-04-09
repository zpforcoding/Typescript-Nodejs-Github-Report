"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(userResponse) {
        this.repos = [];
        this.login = userResponse.login;
        this.fullName = userResponse.fullName;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
    }
}
exports.User = User;
