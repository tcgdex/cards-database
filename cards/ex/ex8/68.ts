import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-68",
	localId: 68,

	// Card informations
	name: {
		en: "Numel",
	},

	hp: 40,

	type: [
		Type.FIRE,
	],

	dexId: 322,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/68/high",
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

	abilities: [{
		id: 416,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dense",
		},
		text: {
			en: "Any damage done to Numel by attacks from Evolved Pokémon (both yours and your opponent's) is reduced by 20 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Ram",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
