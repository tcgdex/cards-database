import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-82",
	localId: 82,

	// Card informations
	name: {
		en: "Trapinch",
	},

	hp: 40,

	type: [
		Type.FIGHTING,
	],

	dexId: 328,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sand Pit",
		},
		text: {
			en: "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Irongrip",
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
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
