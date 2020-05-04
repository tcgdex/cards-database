import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-17",
	localId: 17,

	// Card informations
	name: {
		en: "Bounsweet",
		fr: "Croquine",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 761,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/17/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/17/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/17/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Splash",
			fr: "Trempette",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
