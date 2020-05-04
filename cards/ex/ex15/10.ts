import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-10",
	localId: 10,

	// Card informations
	name: {
		en: "Snorlax δ",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 143,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/10/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 68,
		type: AbilityType.POKEBODY,
		name: {
			en: "Bedhead",
		},
		text: {
			en: "As long as Snorlax remains Asleep between turns, put 2 damage counters on 1 of the Defending Pokémon.",
		}
	}],



	weaknesses: [{
		type: Type.FIGHTING,
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
