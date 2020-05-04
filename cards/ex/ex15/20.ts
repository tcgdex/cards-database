import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-20",
	localId: 20,

	// Card informations
	name: {
		en: "Mantine δ",
	},

	hp: 50,

	type: [
		Type.LIGHTNING,
	],

	dexId: 226,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/20/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sumiyoshi Kizuki",

	abilities: [{
		id: 106,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Power Circulation",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your discard pile for a basic Energy card, show it to your opponent, and put it on top of your deck. If you do, put 1 damage counter on Mantine. This power can't be used if Mantine is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Spiral Drain",
		},
		text: {
			en: "Remove 1 damage counter from Mantine.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
