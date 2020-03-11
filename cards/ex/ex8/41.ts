import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-41",
	localId: 41,

	// Card informations
	name: {
		en: "Minun",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 312,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sniff Out",
		},
		text: {
			en: "Put any 1 card from your discard pile into your hand.",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Negative Spark",
		},
		text: {
			en: "Does 20 damage to each of your opponent's Pokémon that has any Poké-Bodies. Don't apply Weakness and Resistance.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
