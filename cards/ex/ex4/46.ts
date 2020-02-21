import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-46",
	localId: 46,

	// Card informations
	name: {
		en: "Squirtle",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 7,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/46/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 98,
		type: AbilityType.POKEBODY,
		name: {
			en: "Shell Retreat",
		},
		text: {
			en: "As long as Squirtle has any Energy cards attached to it, damage done to Squirtle by an opponent's attack is reduced by 10 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
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
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
