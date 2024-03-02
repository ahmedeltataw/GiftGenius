module.exports = {
    plugins: [
        
        require("postcss-pxtorem"),
        require('postcss-lightningcss')({
            minify: true, // Minify CSS
            browsers: 'last 2 versions', // Browser compatibility
          }),
        
       
       
        // 'postcss-purgecss': purgecss(purgecssConfig)
        
    ],
};