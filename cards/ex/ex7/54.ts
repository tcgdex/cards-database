import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-54",
	localId: 54,

	// Card informations
	name: {
		en: "Drowzee",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 96,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/54/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 289,
		type: AbilityType.POKEBODY,
		name: {
			en: "Insomnia",
		},
		text: {
			en: "Drowzee can't be Asleep.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Soothing Wave",
		},
		text: {
			en: "Flip a coin. If heads, each Defending Pokémon is now Asleep.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
