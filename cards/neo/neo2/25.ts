import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-25",
	localId: 25,

	// Card informations
	name: {
		en: "Kabutops",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 141,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/25/high",
		},
	},

	evolveFrom: {
		en: "Kabuto",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kimiya Masago",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Slash",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Hydrocutter",
		},
		text: {
			en: "Flip a number of coins equal to the number of Energy cards attached to Kabutops. This attack does 40 times the number of heads. You can't flips more than 3 coins in this way.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
