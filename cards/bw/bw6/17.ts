import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-17",
	localId: 17,

	// Card informations
	name: {
		en: "Foongus",
		fr: "Trompignon",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 590,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/17/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/17/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/17/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Spin",
			fr: "Double Tour",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
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
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
