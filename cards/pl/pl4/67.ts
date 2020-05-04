import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-67",
	localId: 67,

	// Card informations
	name: {
		en: "Kabuto",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 140,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/67/high",
		},
	},

	evolveFrom: {
		en: "Dome Fossil",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hironobu Yoshida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fast Evolution",
		},
		text: {
			en: "Search your deck for up to 2 Evolution cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Speed Attack",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
