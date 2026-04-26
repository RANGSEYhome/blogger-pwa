export default defineConfig({
  manifest: {
    id: '/',
    name: 'ផ្ទះរង្សី — RANGSEYhome',
    short_name: 'RANGSEYhome',
    description: 'Personal blog & portfolio by Rangsey P. HENG',
    dir: 'auto',
    lang: 'en-US',
    background_color: '#efefef',
    theme_color: '#55c489',
    display: 'standalone',
    orientation: 'natural',
    scope: '/',
    start_url: '/?utm_source=homescreen',
    prefer_related_applications: false,
    shortcuts: [
      {
        name: 'Shortcut 1',
        short_name: 'Shortcut 1',
        description: 'Shortcut 1 description goes here...',
        url: '/search/label/shortcut-1?utm_source=homescreen',
      },
      {
        name: 'Shortcut 2',
        short_name: 'Shortcut 2',
        description: 'Shortcut 2 description goes here...',
        url: '/search/label/shortcut-2?utm_source=homescreen',
      },
    ],
  },

  pwa: {
    logs: true,
  },

  // OneSignal is only available if you are using cloudflare workers
  oneSignal: {
    enabled: false, // To enable OneSignal, set this to true
    appId: '********-****-****-****-************', // Replace with your OneSignal App Id
    allowLocalhostAsSecureOrigin: true,
  },

  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://rangseyhome.insightune.com',
});
