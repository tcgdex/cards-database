import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-54",
	localId: 54,

	// Card informations
	name: {
		en: "Bulbasaur",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 1,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/54/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sleep Poison",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep and Poisoned.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
