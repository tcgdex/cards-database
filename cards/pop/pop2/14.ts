import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop2-14",
	localId: 14,

	// Card informations
	name: {
		en: "Luvdisc",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 370,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop2/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop2/14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Paralyzing Kiss",
		},
		text: {
			en: "If there are 2 Defending Pokémon in play, choose 1 of the Defending Pokémon. That Pokémon is now Paralyzed. (If there is only 1 Defending Pokémon, this attack does nothing.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Fast Stream",
		},
		text: {
			en: "Move 1 Energy card attached to the Defending Pokémon to the other Defending Pokémon. (Ignore this effect if your opponent has only 1 Defending Pokémon.)",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "POP Series 2",
		code: "pop2"
	}
}

export default card
