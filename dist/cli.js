#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
function formatDate(inputDate) {
    return inputDate.toLocaleDateString('th-TH', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
function formatHTML(inputDate, arg1) {
    var date = formatDate(inputDate);
    var html = "\n    <div style=\"text-align: center;\"><span style=\"font-size: xx-large;\">KUNLUN LAB</span></div>\n        <div style=\"text-align: center;\">\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48 ".concat(arg1, " (").concat(date, ")</div>\n            <div><br /></div>\n            <div><br /></div>\n            <div>\n                <div>Blog \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 ").concat(arg1, " \u0E27\u0E31\u0E19\u0E19\u0E35\u0E49\u0E08\u0E30\u0E21\u0E35\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49</div>\n                    <div>-&nbsp;<br /><br /></div>\n                </div>\n                <div class=\"separator\" style=\"clear: both; text-align: center;\">\n                <div style=\"text-align: left;\">\n                <div>\n                <div>\u0E2A\u0E23\u0E38\u0E1B\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E43\u0E19\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49</div>\n                    <div>-&nbsp;</div>\n                </div>\n            </div>\n        </div>\n        <div><br />\n    </div>\n    ");
    return html;
}
commander_1.program
    .version('1.0.0')
    .description('A CLI for Kunlun Lab');
commander_1.program
    .command('blog <arg1>')
    .description('A command to generate a blog template (blog <times>)')
    .option('-b, --back <arg2>', 'Go back in time by a certain number of days')
    .option('-f, --format <arg3>', 'Format the output as a formatted (html) or only (date)')
    .action(function (arg1, cmdObj) {
    var targetDate = new Date();
    if (cmdObj.back) {
        targetDate.setDate(targetDate.getDate() - Number(cmdObj.back));
    }
    if (cmdObj.format === 'html') {
        var formattedHTML = formatHTML(targetDate, arg1);
        console.log("".concat(formattedHTML));
        return;
    }
    if (cmdObj.format === 'date') {
        var formattedDate_1 = formatDate(targetDate);
        console.log("".concat(formattedDate_1));
        return;
    }
    var formattedDate = formatDate(targetDate);
    console.log("\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48 ".concat(arg1, " (").concat(formattedDate, ")"));
});
commander_1.program.parse(process.argv);
if (!process.argv.slice(2).length) {
    commander_1.program.outputHelp();
}
