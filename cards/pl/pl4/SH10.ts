import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-SH10",
	localId: "SH10",

	// Card informations
	name: {
		en: "Bagon",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 371,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/SH10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/SH10/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",

	abilities: [{
		id: 315,
		type: AbilityType.POKEBODY,
		name: {
			en: "Star Barrier",
		},
		text: {
			en: "As long as Bagon has any Energy attached to it, Bagon has no Weakness.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dragon Rage",
		},
		text: {
			en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "+10"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
