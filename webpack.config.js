const path = require("path");

module.exports = {
    mode: 'development',

    //uncomment  below  for JS
    /*
    entry: "./src/index.js",
    output: {
        filename: "main.js",
    path: path.resolve(__dirname, "dist")
    }
    */

    //uncomment below for Ts
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            // },
            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //     use: [
            //         {loader : "style-loader"},
            //         {loader : "css-loader"}
            //     ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                //   {loader: "style-loader"},
                  // Translates CSS into CommonJS
                  {loader:"css-loader"},
                  // Compiles Sass to CSS
                //   {loader:"sass-loader"}
                ],
              },

        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")

    }
}