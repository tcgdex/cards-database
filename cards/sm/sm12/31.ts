import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-31",
	localId: 31,

	// Card informations
	name: {
		en: "Tepig",
		fr: "Gruikui",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 498,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/31/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/31/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/31/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mina Nakai",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
