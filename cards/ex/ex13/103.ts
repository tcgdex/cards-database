import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-103",
	localId: 103,

	// Card informations
	name: {
		en: "Mewtwo Star",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 150,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/103/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Absorption",
		},
		text: {
			en: "Search your discard pile for an Energy card and attach it to Mewtwo Star.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.FIRE,
			Type.LIGHTNING
		],
		name: {
			en: "Psychic Star",
		},
		text: {
			en: "If the Defending Pokémon is an Evolved Pokémon, discard all Energy attached to Mewtwo Star and this attack does 50 damage plus 50 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
