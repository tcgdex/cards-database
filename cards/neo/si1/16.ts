import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "si1-16",
	localId: 16,

	// Card informations
	name: {
		en: "Lickitung",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 108,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/si1/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/si1/16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Lick Wounds",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 Pokémon (yours or your opponent's) with damage counters on it and remove 2 damage counters from it (1 if it only has 1).",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tongue Stretch",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. Don't apply Weakness and Resistance.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Southern Islands",
		code: "si1"
	}
}

export default card
