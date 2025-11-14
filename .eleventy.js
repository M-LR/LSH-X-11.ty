module.exports = function(eleventyConfig) {
  
  // Filtre pour formater les dates
  eleventyConfig.addFilter("dateFormat", function(date) {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(date).toLocaleDateString('fr-FR', options);
  });

  // Shortcode simple : Bouton
  eleventyConfig.addShortcode("button", function(text, url) {
    return `<a href="${url}" class="btn">${text}</a>`;
  });

  // Shortcode simple : Alerte
  eleventyConfig.addShortcode("alert", function(type, message) {
    return `<div class="alert alert-${type}">${message}</div>`;
  });

  // Shortcode avec contenu (paired) : Note
  eleventyConfig.addPairedShortcode("note", function(content, title) {
    return `
      <div class="note">
        <h4>${title}</h4>
        <div>${content}</div>
      </div>
    `;
  });

  // Shortcode avec contenu : Citation
  eleventyConfig.addPairedShortcode("quote", function(content, author) {
    return `
      <blockquote class="quote">
        <p>${content}</p>
        <cite>— ${author}</cite>
      </blockquote>
    `;
  });

  // Copier les assets vers le dossier de sortie
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    // Utiliser Nunjucks pour les fichiers Markdown
    markdownTemplateEngine: "njk",
    
    dir: {
      input: "src",
      includes: "_includes",
      output: "public"
    }
  };
};
