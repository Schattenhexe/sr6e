export const SR6E = {
  weaponTypes: {
    firearm: 'SR6E.weaponTypes.firearm',
    melee: 'SR6E.weaponTypes.melee',
    projectile: "SR6E.weaponTypes.projectile",
    exoticWeapon: "SR6E.weaponTypes.exoticWeapon"
  }
};

/**
 * The set of Ability Scores used within the sytem.
 * @type {Object}
 */
 SR6E.abilities = {
  "str": "SR6E.AbilityStr",
  "dex": "SR6E.AbilityDex",
  "con": "SR6E.AbilityCon",
  "int": "SR6E.AbilityInt",
  "wis": "SR6E.AbilityWis",
  "cha": "SR6E.AbilityCha"
};

SR6E.sheetContent = {
  "AmmoClass": "SR6E.AmmoClass",
  "AttackMod": "SR6E.AttackMod",
  "DamageMod": "SR6E.DamageMod",
  "Quantity": "SR6E.Quantity",
};

SR6E.abilityAbbreviations = {
  "str": "SR6E.AbilityStrAbbr",
  "dex": "SR6E.AbilityDexAbbr",
  "con": "SR6E.AbilityConAbbr",
  "int": "SR6E.AbilityIntAbbr",
  "wis": "SR6E.AbilityWisAbbr",
  "cha": "SR6E.AbilityChaAbbr"
};

SR6E.itemProps = {
  "price": "SR6E.Price",
  "avail": "SR6E.Avail",
  "needsLicense": "SR6E.needsLicense",
  "SelectWeaponType": "SR6E.SelectWeaponType"
};

SR6E.firearmTypes = {
  "taser": "SR6E.firearmTypes.taser",
  "holdout": "SR6E.firearmTypes.holdout",
  "lightPistol": "SR6E.firearmTypes.lightPistol",
  "mp": "SR6E.firearmTypes.mp",
  "heavyPistol": "SR6E.firearmTypes.heavyPistol",
  "smg": "SR6E.firearmTypes.smg",
  "shotgun": "SR6E.firearmTypes.shotgun",
  "rifle": "SR6E.firearmTypes.rifle",
  "mg": "SR6E.firearmTypes.mg",
  "ac": "SR6E.firearmTypes.ac"
};
SR6E.meleeTypes = {
  "blade": "SR6E.meleeTypes.blade",
  "club": "SR6E.meleeTypes.club",
  "other": "SR6E.meleeTypes.other"
};
SR6E.projectileTypes = {
  "thrown": "SR6E.projectileTypes.thrown",
  "projectile": "SR6E.projectileTypes.projectile"
}
SR6E.dmgTypes = {
  "physical": "SR6E.dmgTypes.physical",
  "stun": "SR6E.dmgTypes.stun",
  "electricityStun": "SR6E.dmgTypes.electricityStun"
};

SR6E.SheetTabs = {
  "Description": "SR6E.SheetTabs.Description",
  "Weapon": "SR6E.SheetTabs.Weapon",
  "Ammo": "SR6E.SheetTabs.Ammo",
  "WeaponMods": "SR6E.SheetTabs.WeaponMods",
  "Effects": "SR6E.SheetTabs.Effects",
};