module.exports = {
  
  important: true,
  // Active dark mode on class basis
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  purge: {
    content: [
      "./pages/index.jsx",
      "./pages/Login.jsx",
      "./pages/Register.jsx",
      "./pages/Home.jsx",
      "./modules/auth/components/RegisterForm.jsx",
      "./modules/auth/components/SignInForm.jsx"
    ],
  },
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        check: "url('/icons/check.svg')",
        landscape: "url('/images/landscape/2.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};

