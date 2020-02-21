import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy0-10",
	localId: 10,

	// Card informations
	name: {
		en: "Delphox",
		fr: "Goupelin",
	},

	hp: 140,

	type: [
		Type.FIRE,
	],

	dexId: 655,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy0/10/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy0/10/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/10/high",
		},
	},

	evolveFrom: {
		en: "Braixen",
		fr: "Roussil",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Will-O-Wisp",
			fr: "Feu Follet",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fire Blast",
			fr: "Déflagration",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Kalos Starter Set",
		code: "xy0"
	}
}

export default card
