import { useEffect } from 'react';

const SEO = ({ 
  title = 'Suresh Datt Joshi | Full-Stack Developer & DevOps Enthusiast',
  description = 'Full-Stack Developer specializing in MERN stack, DevOps, and cloud engineering. Building scalable web applications with modern technologies.',
  keywords = 'Full Stack Developer, MERN Stack, React Developer, Node.js, DevOps, Cloud Engineering, Web Development, JavaScript Developer',
  ogImage = 'https://ui-avatars.com/api/?name=Suresh+Datt+Joshi&size=1200&background=22d3ee&color=fff'
}) => {
  useEffect(() => {
    document.title = title;
    
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: 'Suresh Datt Joshi' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:creator', content: '@suresh_datt_' },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = name || property;
      
      let tag = document.querySelector(`meta[${attribute}="${value}"]`);
      
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, value);
        document.head.appendChild(tag);
      }
      
      tag.setAttribute('content', content);
    });
  }, [title, description, keywords, ogImage]);

  return null;
};

export default SEO;
