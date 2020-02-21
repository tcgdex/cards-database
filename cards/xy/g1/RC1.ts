import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC1",
	localId: "RC1",

	// Card informations
	name: {
		en: "Chikorita",
		fr: "Germignon",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 152,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC1/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC1/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC1/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Run Around",
			fr: "Course Effrénée",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
