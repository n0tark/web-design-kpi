import Account from './accModel.js';
import OutputAccount from './accView.js';
import Controller from './controller.js';
import Mode from './modeModel.js';
import OutputMode from './modeView.js';

let profile = new Account();
let outAcc = new OutputAccount();

let modeModel = new Mode();
let outMode = new OutputMode();

let control = new Controller(outAcc, profile, modeModel, outMode);
