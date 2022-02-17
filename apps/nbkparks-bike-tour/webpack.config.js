module.exports = (config, context) => {
    const { module } = config;

    module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader']
    });

    return { ...config, module };
};
