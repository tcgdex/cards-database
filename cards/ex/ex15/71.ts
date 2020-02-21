import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-71",
	localId: 71,

	// Card informations
	name: {
		en: "Wooper δ",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 194,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Amnesia",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Slap",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
