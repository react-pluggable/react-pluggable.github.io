const users = [];

const siteConfig = {
  title: "React Pluggable ", // Title for your website.
  tagline: "Thinking Features over Components",
  url: "https://react-pluggable.github.io", // Your website URL
  baseUrl: "/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "react-pluggable",
  organizationName: "react-pluggable",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "introduction", label: "Docs" },
    { doc: "faq", label: "FAQ" },
    {
      href: "https://github.com/GeekyAnts/react-pluggable",
      label: "Github",
    },

    {
      href:
        "https://geekyants.com/hire?utm_source=react-pluggable&utm_medium=Header&utm_campaign=react-pluggable",
      label: `Hire The Creators`,
    },
    { search: true },
    // { page: "help", label: "Help" },
    // { blog: true, label: "Blog" },
  ],
  algolia: {
    apiKey: "beb0cd4c95290b0e5da5b0f37e301c68",
    indexName: "react-pluggable",
    AppId: "BH4D9OD16A",
    placeholder: "Search",
    algoliaOptions: { facetFilters: ["language:en"] },
  },

  gaTrackingId: " GTM-NVSVNKL",
  gaGtag: true,
  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: "img/homeIcon.png",
  footerIcon: "img/homeIcon.png",
  favicon: "img/homeIcon.png",

  /* Colors for website */
  colors: {
    primaryColor: "#78468E",
    secondaryColor: "#730e48",
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} React Pluggable.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "agate",
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["https://buttons.github.io/buttons.js", "/js/custom.js"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/homeIcon.png",
  twitterImage: "img/undraw_tweetstorm.svg",

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
};

module.exports = siteConfig;
