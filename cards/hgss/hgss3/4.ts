import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-4",
	localId: 4,

	// Card informations
	name: {
		en: "Gliscor",
		fr: "Scorvol",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 472,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/4/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/4/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/4/high",
		},
	},

	evolveFrom: {
		en: "Gligar",
		fr: "Scorplane",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Ninja Fang",
			fr: "Croc Ninja",
		},
		text: {
			en: "If, before Gliscor does damage, the Defending Pokémon has no damage counters on it and is then damaged by this attack (after applying Weakness and Resistance), the Defending Pokémon is now Paralyzed.",
			fr: "Si, avant que Scorvol n'inflige de dégâts, le Pokémon Défenseur n'a aucun marqueur de dégât et qu'il subit ensuite des dégâts à cause de cette attaque (après application de la Faiblesse et de la Résistance), il est maintenant Paralysé.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Jab",
			fr: "Direct Toxik",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
