import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-75",
	localId: 75,

	// Card informations
	name: {
		en: "Magikarp",
	},

	hp: 30,

	type: [
		Type.WATER,
	],

	dexId: 129,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 75,
		name: "Keiko Fukuyama"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Signs of Evolution",
		},
		text: {
			en: "Flip a coin. If heads, search your deck for a card that evolves from Magikarp, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Splash",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
