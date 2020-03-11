import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-24",
	localId: 24,

	// Card informations
	name: {
		en: "Wobbuffet",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 202,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/24/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 148,
		type: AbilityType.POKEBODY,
		name: {
			en: "Safeguard",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to Wobbuffet by your opponent's Pokémon-ex.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flip Over",
		},
		text: {
			en: "Wobbuffet does 10 damage to itself, and don't apply Weakness and Resistance to this damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
