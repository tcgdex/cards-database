import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-56",
	localId: 56,

	// Card informations
	name: {
		en: "Meditite",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 307,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/56/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hisao Nakamura",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Kick",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pure Power",
		},
		text: {
			en: "Put 2 damage counters on your opponent's Pokémon in any way you like.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
