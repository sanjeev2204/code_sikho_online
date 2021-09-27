"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const env_1 = require("./environments/env");
const UserRouter_1 = require("./routers/UserRouter");
class Server {
    constructor() {
        this.app = express();
        this.setConfiguration();
        this.setRoutes();
        this.error404Handler();
        this.handleErrors();
    }
    setConfiguration() {
        this.connectMongodb();
        this.configureBodyParser();
    }
    connectMongodb() {
        console.log('enterted');
        const databaseUrl = (0, env_1.getEnvironmentVariables)().db_url;
        mongoose.connect(databaseUrl).then(() => {
            console.log('connected to database');
        });
    }
    configureBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
    setRoutes() {
        this.app.use('/api/user/', UserRouter_1.default);
    }
    error404Handler() {
        this.app.use((req, res) => {
            res.status(404).json({
                message: "Not Found",
                status_code: 404
            });
        });
    }
    handleErrors() {
        this.app.use((error, req, res, next) => {
            const errorStatus = req.errorStatus || 500;
            res.status(errorStatus).json({
                message: error.message || 'something went wrong . please try again',
                statuscode: errorStatus
            });
        });
    }
}
exports.Server = Server;
