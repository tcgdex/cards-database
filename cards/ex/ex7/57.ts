import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-57",
	localId: 57,

	// Card informations
	name: {
		en: "Hoppip",
	},

	hp: 30,

	type: [
		Type.GRASS,
	],

	dexId: 187,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/57/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},

	abilities: [{
		id: 298,
		type: AbilityType.POKEBODY,
		name: {
			en: "Buffer",
		},
		text: {
			en: "If Hoppip would be Knocked Out by an opponent's attack, flip a coin. If heads, Hoppip is not Knocked Out and its remaining HP becomes 10 instead.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Miracle Powder",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
