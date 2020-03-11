import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-68",
	localId: 68,

	// Card informations
	name: {
		en: "Poliwhirl",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 61,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/68/high",
		},
	},

	evolveFrom: {
		en: "Poliwag",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Energy Ball",
		},
		text: {
			en: "Does 30 damage plus 10 more damage for each Energy attached to Poliwhirl but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
