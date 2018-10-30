const fs = require('fs');
const assert = require('assert');
const { extractEmailHtml } = require('../prepare_google_form');

describe('extractEmailHtml', function () {
    it('should prepare html for email', async function() {
        const input = fs.readFileSync('js/test/input.txt', 'utf8');
        const output = extractEmailHtml(input);

        const expectedOutput = fs.readFileSync('js/test/expected_output.txt', 'utf8');
        assert.equal(output, expectedOutput);
    });
});
