const path = require('path');
const hljs = require('highlight.js');
const marked =  require('marked');
const renderer =  new marked.Renderer();

renderer.code = (code, lang) => {
    return '<pre><code class="hljs ' + lang + '">' +
        hljs.highlight(lang, code).value +
        '</code></pre>';
}

module.exports = async ({ config, mode }) => {
    config.module.rules.push({
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
    }
                            );
    config.module.rules[1] = {
        test: /\.md$/,
        use: ['html-loader',
              {
                  loader: 'markdown-loader',
                  options: {
                      renderer,
                      langPrefix: ''
                  }
              },
              'includes-loader'],
    };
    //console.log(JSON.stringify(config, null, "\t"));
    return config;

    // // );
    // defaultConfig.module.rules[1] = {
    //     test: /\.md$/,
    //     use: ['html-loader', 'markdown-loader', 'includes-loader'],
    // }
    // return defaultConfig;
};
