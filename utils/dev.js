import {marked} from './lib/marked-es6.js';
import {hljs} from './lib/highlight-es6.js';

marked.setOptions({
    langPrefix: '',
    highlight: function(code) {
        return hljs.highlightAuto(code).value;
    },
});

(async function() {

    // Read url for requested page
    const page = location.search.split('?')[1];

    // Try to load pages's markdown, or index if none requested
    let response = await fetch(`./pages/${page || 'index'}.md`, {method: 'GET'});

    // If not found, fallback to loading index
    if (!response.ok) response = await fetch(`./pages/index.md`, {method: 'GET'});

    // Get text from response
    const text = await response.text();

    // Replace this page's content with the converted markdown to html
    document.body.innerHTML = marked(text);
})();