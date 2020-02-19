import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-50",
	localId: 50,

	// Card informations
	name: {
		en: "Horsea δ",
	},

	hp: 40,

	type: [
		Type.FIGHTING,
	],

	dexId: 116,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/50/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/50/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 55,
		name: "Hisao Nakamura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sleepy Ball",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
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
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card

