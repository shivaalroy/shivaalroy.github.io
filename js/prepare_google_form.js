function extractEmailHtml(input) {
    let result = input.replace(/=\n/g, "");
    result = result.replace(/3D/g, "");
    result = result.replace(/\n\n/g, "\n");

    const trim_start = result.indexOf("<table");
    const trim_end = result.lastIndexOf("</body>");
    return result.substring(trim_start, trim_end);
}

// module.exports.extractEmailHtml = extractEmailHtml;