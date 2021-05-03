"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const body_parser_1 = __importDefault(require("body-parser"));
const promises_1 = require("fs/promises");
const rootPath = path_1.resolve(__dirname, '..');
process.chdir(rootPath);
const app = express_1.default();
app.listen(2348);
app.use(express_1.default.static(path_1.resolve(rootPath, 'public')));
app.get('/', (_request, response) => {
    response.sendFile(rootPath + '/public/main.html');
});
const jsonParser = body_parser_1.default.json();
const plantsFile = path_1.resolve(rootPath, 'plants.json');
app.post('/api/form/new_plant', jsonParser, async (request, response) => {
    const data = request.body;
    let plantInfo;
    try {
        const content = await promises_1.readFile(plantsFile, 'utf8');
        plantInfo = JSON.parse(content);
    }
    catch (_error) {
        plantInfo = [];
    }
    plantInfo.push(data);
    await promises_1.writeFile(plantsFile, JSON.stringify(plantInfo), 'utf8');
    response.send('OK');
});
//# sourceMappingURL=index.js.map