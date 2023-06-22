/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Actor partials.
    "systems/sr6e/templates/actor/parts/actor-features.html",
    "systems/sr6e/templates/actor/parts/actor-items.html",
    "systems/sr6e/templates/actor/parts/actor-spells.html",
    "systems/sr6e/templates/actor/parts/actor-effects.html",

    // Item partials
    "systems/sr6e/templates/item/parts/header.html",
    "systems/sr6e/templates/item/parts/description.html",
  ]);
};
