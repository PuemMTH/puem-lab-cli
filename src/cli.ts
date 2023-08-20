#!/usr/bin/env node

import { program } from 'commander';

function formatDate(inputDate: Date): string {
    return inputDate.toLocaleDateString('th-TH', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

function formatHTML(inputDate: Date, arg1: string): string {
    const date = formatDate(inputDate);
    const html = `
    <div style="text-align: center;"><span style="font-size: xx-large;">KUNLUN LAB</span></div>
        <div style="text-align: center;">ครั้งที่ ${arg1} (${date})</div>
            <div><br /></div>
            <div><br /></div>
            <div>
                <div>Blog วันที่ ${arg1} วันนี้จะมีเป้าหมายดังนี้</div>
                    <div>-&nbsp;<br /><br /></div>
                </div>
                <div class="separator" style="clear: both; text-align: center;">
                <div style="text-align: left;">
                <div>
                <div>สรุปการดำเนินการในวันนี้</div>
                    <div>-&nbsp;</div>
                </div>
            </div>
        </div>
        <div><br />
    </div>
    `;

    return html;
}

program
    .version('1.0.0')
    .description('A CLI for Kunlun Lab');

program
    .command('blog <arg1>')
    .description('A command to generate a blog template (blog <times>)')
    .option('-b, --back <arg2>', 'Go back in time by a certain number of days')
    .option('-f, --format <arg3>', 'Format the output as a formatted (html) or only (date)')
    .action((arg1, cmdObj) => {
        let targetDate = new Date();
        if (cmdObj.back) {
            targetDate.setDate(targetDate.getDate() - Number(cmdObj.back));
        }
        if (cmdObj.format === 'html') {
            const formattedHTML = formatHTML(targetDate, arg1);
            console.log(`${formattedHTML}`);
            return;
        }
        if (cmdObj.format === 'date') {
            const formattedDate = formatDate(targetDate);
            console.log(`${formattedDate}`);
            return;
        }

        const formattedDate = formatDate(targetDate);
        console.log(`ครั้งที่ ${arg1} (${formattedDate})`);
    });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
    program.outputHelp();
}
