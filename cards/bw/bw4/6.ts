import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-6",
	localId: 6,

	// Card informations
	name: {
		en: "Pansage",
		fr: "Feuillajou",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 511,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/6/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/6/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/6/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Seed Bomb",
			fr: "Canon Graine",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
