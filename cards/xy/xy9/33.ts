import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-33",
	localId: 33,

	// Card informations
	name: {
		en: "Tympole",
		fr: "Tritonde",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 535,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/33/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/33/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/33/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Get Loud",
			fr: "Tapageur",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Round",
			fr: "Chant Canon",
		},
		text: {
			en: "This attack does 10 damage times the number of your Pokémon that have the Round attack.",
			fr: "Cette attaque inflige 10 dégâts multipliés par le nombre de vos Pokémon possédant l'attaque Chant Canon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
