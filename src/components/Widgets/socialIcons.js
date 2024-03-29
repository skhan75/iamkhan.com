import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactData from '../../data/contact';

const SocialIcons = (props) => {
  return (
    <ul className={props.bordered ? 'mi-socialicons mi-socialicons-bordered' : 'mi-socialicons'}>
      { contactData.social.map((s) => (
        <li key={s.label}>
          <a href={s.link}>
            <FontAwesomeIcon icon={s.icon} />
          </a>
       </li>
     ))}
    </ul>
  )
}

export default SocialIcons;
