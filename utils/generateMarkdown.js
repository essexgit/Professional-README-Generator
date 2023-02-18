// function to generate markdown for README
function generateMarkdown(data) {
  let line1 = `# ${data.title}\n`;
  let line2 = `#### ${data.description}\n`;
  let line3 = `## ${data.github}\n`;
  let line4 = `### ${data.email}\n`;
  let line6 = `### ${data.installCmd}\n`;
  let line7 = `### ${data.runCmd}\n`;
  let line8 = `### ${data.operate}\n`;
  let line9 = `#### ${data.licence}\n`;
  let line10 = `#### ${data.contribution}\n`;
  let func = line1 + line2 + line3 + line4 + line6 + line7 + line8 + line9 + line10;
  return func;
}

module.exports = generateMarkdown;
