/**
 * Extend the basic ItemSheet with some very simple modifications
 * @extends {ItemSheet}
 */
export class Shadowrun6ItemSheet extends ItemSheet {

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["sr6e", "sheet", "item"],
      width: 620,
      height: 480,
      tabs: [{ navSelector: ".tabs", contentSelector: ".basic-details", initial: "description" }]
    });
  }

  /** @override */
  get template() {
    const path = "systems/sr6e/templates/item";
    // Return a single sheet for all item types.
    // return `${path}/item-sheet.html`;

    // Alternatively, you could use the following return statement to do a
    // unique item sheet by type, like `weapon-sheet.html`.
    return `${path}/item-${this.item.type}-sheet.html`;
  }

  /* -------------------------------------------- */

  /** @override */
  async getData(options) {
    // Retrieve base data structure.
    const context = await super.getData();
    const item = context.item;
    context.weaponTypes = CONFIG.SR6E.weaponTypes;
    context.firearmTypes = CONFIG.SR6E.firearmTypes;
    context.meleeTypes = CONFIG.SR6E.meleeTypes;
    context.projectileTypes = CONFIG.SR6E.projectileTypes;
    
    context.descriptionHTML = await TextEditor.enrichHTML(item.system.description.value, {
      secrets: item.isOwner,
      async: true,
      relativeTo: this.item,
      rollData: context.rollData
    });

    // Use a safe clone of the item data for further operations.
    const itemData = context.item;

    // Retrieve the roll data for TinyMCE editors.
    context.rollData = {};
    let actor = this.object?.parent ?? null;
    if (actor) {
      context.rollData = actor.getRollData();
    }
    
    // Add the actor's data to context.data for easier access, as well as flags.
    context.system = itemData.system;
    context.flags = itemData.flags;
    
    return context;
  }

  /* -------------------------------------------- */

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.isEditable) return;

    // Roll handlers, click handlers, etc. would go here.
  }
}
