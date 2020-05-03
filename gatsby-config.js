module.exports = {
  siteMetadata: {
    title: `Alcohol Reviews`,
    siteUrl: `https://nehalem.netlify.com`,
    description: `The place to read about %TOPICS%`,
    topics: [
      `alcohol`,
      `whiskey`,
      `whisky`,
      `liquor`,
      `gin`,
      `rum`,
      `vodka`,
      `cocktails`,
    ],
    menu: [
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
      {
        name: "Cocktails",
        path: "/cocktails",
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
      {
        name: "Cocktails",
        path: "/cocktails",
      },
    ],
    search: true,
    author: {
      name: `Alcohol Reviews`,
      description: `Alcohol Reviews is the best place to find out about new liquors packed full of flavour and excitement`,
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
