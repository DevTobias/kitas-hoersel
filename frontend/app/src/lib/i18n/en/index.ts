import type { Translation } from '../i18n-types.js';

const en: Translation = {
  title: 'Hello World',

  mechterstaedt: 'Mechterstädt',
  teutleben: 'Teutleben',

  header: {
    home: 'Home',
  },

  footer: {
    header: 'Day-care centers in the municipality of Hörsel',
    privacy: 'Privacy',
    imprint: 'Imprint',
    contact: 'Contact',
    copyright:
      "© {year} <a href='https://www.linkedin.com/in/tobias-kärst' target='_blank' rel='noopener noreferrer'>Tobias Kärst</a>. All rights reserved.",
  },

  error_404: {
    error: '404 ERROR',
    not_found: 'Page not found',
    not_found_desc: 'Sorry, the requested page could not be found. 😿',
    back_home: 'Back home',
  },
};

export default en;
