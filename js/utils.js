function sanitizeHTML(str) {
	var temp = document.createElement('div');
	temp.textContent = str;
	return temp.innerHTML;
}

function processTimeInfo(time) {
    const theDate = new Date(time);
    const inverted = theDate.toISOString().slice(0, 10);
    const fullName = theDate.toLocaleString('en-gb', {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
    });
    return { inverted, fullName };
}

export {
    sanitizeHTML,
    processTimeInfo,
}
