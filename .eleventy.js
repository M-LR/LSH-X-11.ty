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

 eleventyConfig.addFilter("filterFeatured", function(collection) {
    return collection.filter(item => item.data['featured-project'] === true);
  });

  // Copier les assets vers le dossier de sortie
  eleventyConfig.addPassthroughCopy("src/assets");


  
  // Watch les changements CSS en développement
  eleventyConfig.addWatchTarget("assets/css/**/*.css");
  

  return {
    // Utiliser Nunjucks pour les fichiers Markdown
    markdownTemplateEngine: "njk",
    pathPrefix: "/LSH-X-11.ty/",
    dir: {
      input: "src",
      includes: "_includes",
      output: "public"
    }
  };
};
