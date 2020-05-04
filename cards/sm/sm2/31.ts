import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-31",
	localId: 31,

	// Card informations
	name: {
		en: "Snorunt",
		fr: "Stalgamin",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 361,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/31/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/31/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/31/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Chilly",
			fr: "Glacial",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Frost Breath",
			fr: "Souffle Glacé",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
