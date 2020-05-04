import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-101",
	localId: 101,

	// Card informations
	name: {
		en: "Snover",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 459,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/101/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		name: {
			en: "Curiosity",
		},
		text: {
			en: "Look at your opponent's hand.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Snowball Fight",
		},
		text: {
			en: "Flip a coin. If tails, Snover does 10 damage to itself.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
