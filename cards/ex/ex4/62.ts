import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 159,
		name: "Atsuko Ujiie"
	},



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
