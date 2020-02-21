import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-81",
	localId: 81,

	// Card informations
	name: {
		en: "Psyduck δ",
	},

	hp: 50,

	type: [
		Type.LIGHTNING,
	],

	dexId: 54,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Disable",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
