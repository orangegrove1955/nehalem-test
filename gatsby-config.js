module.exports = {
  siteMetadata: {
    title: `nehalem-starter`,
    siteUrl: `https://nehalem.netlify.com`,
    description: `A Gatsby starter for nehalem`,
    topics: [],
    menu: [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Whisky",
        path: "/whisky",
      },
      {
        name: "Rum",
        path: "/rum",
      },
      {
        name: "Gin",
        path: "/gin",
      },
      {
        name: "Vodka",
        path: "/vodka",
      },
    ],
    footerMenu: [
      {
        name: "Whisky",
        path: "/whisky",
      },
      {
        name: "Rum",
        path: "/rum",
      },
      {
        name: "Gin",
        path: "/gin",
      },
      {
        name: "Vodka",
        path: "/vodka",
      },
    ],
    search: true,
    author: {
      name: `Matthew`,
      description: `I'm <strong>nehalem</strong>, a Gatsby theme by 
        <a href="https://nehalist.io" rel="noopener" target="_blank">nehalist.io</a>. If you like what you see feel free to give a 
        <a href="https://github.com/nehalist/gatsby-theme-nehalem" rel="noopener" target="_blank">star on GitHub!</a>`,
      social: {
        facebook: ``,
        twitter: ``,
        linkedin: ``,
        instagram: ``,
        youtube: ``,
        github: ``,
        twitch: ``,
      },
    },
  },
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/logo.png`,
        },
      },
    },
  ],
};
