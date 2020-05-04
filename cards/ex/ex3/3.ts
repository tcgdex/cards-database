import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-3",
	localId: 3,

	// Card informations
	name: {
		en: "Crawdaunt",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 342,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/3/high",
		},
	},

	evolveFrom: {
		en: "Corphish",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hisao Nakamura",

	abilities: [{
		id: 130,
		type: AbilityType.POKEBODY,
		name: {
			en: "Power Pinchers",
		},
		text: {
			en: "As long as Crawdaunt is your Active Pokémon, when any of your Active Pokémon does damage to the Defending Pokémon, the attack does 10 more damage (before applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Guillotine",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
