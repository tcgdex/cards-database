import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ru1-1",
	localId: 1,

	// Card informations
	name: {
		en: "Venusaur",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 3,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/ru1/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/ru1/1/high",
		},
	},

	evolveFrom: {
		en: "Ivysaur",
	},

	tags: [
		Tag.STAGE2,
	],





	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giga Drain",
		},
		text: {
			en: "Remove from Venusaur the number of damage counters equal to the damage you did to the Defending Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Pokémon Rumble",
		code: "ru1"
	}
}

export default card
