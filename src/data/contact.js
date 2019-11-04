import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';

const contactData = {
  social: [
    {
      link: 'https://github.com/skhan75',
      label: 'Github',
      icon: faGithub,
    },
    {
      link: 'https://www.facebook.com/azhankhan',
      label: 'Facebook',
      icon: faFacebook,
    },
    {
      link: 'https://www.instagram.com/khanazhan/',
      label: 'Instagram',
      icon: faInstagram,
    },
    {
      link: 'https://www.linkedin.com/in/samiahmadkhan',
      label: 'LinkedIn',
      icon: faLinkedinIn,
    },
    {
      link: 'mailto:sami.ahmadkhan12@gmail.com',
      label: 'Email',
      icon: faEnvelope,
    },
  ],
  contact: {
    phoneNumbers: [
      '+1(312)-678-7629'
    ],
    emailAddress: [
      'sami.ahmadkhan12@gmail.com'
    ],
    address: [
      'San Francisco, CA, U.S.A.'
    ]
  }
}

export default contactData;
