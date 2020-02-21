import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-33",
	localId: 33,

	// Card informations
	name: {
		en: "Staryu",
		fr: "Stari",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 120,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/33/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/33/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/33/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Reckless Charge",
			fr: "Attaque Imprudente",
		},
		text: {
			en: "This Pokémon does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige 10 dégâts.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
