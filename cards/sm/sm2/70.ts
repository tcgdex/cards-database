import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-70",
	localId: 70,

	// Card informations
	name: {
		en: "Barboach",
		fr: "Barloche",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 339,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/70/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/70/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/70/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hook",
			fr: "Crochet",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Mud-Slap",
			fr: "Coud’Boue",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
