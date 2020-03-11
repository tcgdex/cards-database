import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-62",
	localId: 62,

	// Card informations
	name: {
		en: "Team Magma's Houndour",
	},

	hp: 50,

	type: [
		Type.FIRE,
	],

	dexId: 228,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/62/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Ujiie",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Combustion",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Super Singe",
		},
		text: {
			en: "The Defending Pokémon is now Burned.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
