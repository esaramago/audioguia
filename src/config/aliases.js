const aliases = (prefix = 'src') => ({
    '@components': `${prefix}/components`,
    '@styles': `${prefix}/styles`,
    '@routes': `${prefix}/routes`,
    '@images': `${prefix}/images`,
    '@helpers': `${prefix}/helpers`,
});

module.exports = aliases;