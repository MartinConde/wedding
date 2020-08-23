require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Bräunig Hochzeit`,
    description: ``,
    author: `Martin Conde`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/fonts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slider`,
        path: `${__dirname}/src/slider`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/icons`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/src/themes/lightTheme.js`).lightTheme,
        dark: require(`${__dirname}/src/themes/darkTheme.js`).darkTheme,
      },
    },
    { 
      resolve: `gatsby-plugin-styled-components`, 
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `braeunig-hochzeit`,
        short_name: `braeunig-hochzeit`,
        start_url: `/`,
        background_color: `#0e0b16`,
        theme_color: `#6882a1`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, 
      },
    },
    `gatsby-plugin-offline`,
  ],
}
