import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-21",
	localId: 21,

	// Card informations
	name: {
		en: "Seaking",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 119,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/21/high",
		},
	},

	evolveFrom: {
		en: "Goldeen",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Arrow",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fast Stream",
		},
		text: {
			en: "Move 1 Energy card attached to the Defending Pokémon to the other Defending Pokémon. (Ignore this effect if your opponent has only 1 Defending Pokémon.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
