import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-12",
	localId: 12,

	// Card informations
	name: {
		en: "Pichu",
	},

	hp: 30,

	type: [
		Type.LIGHTNING,
	],

	dexId: 172,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Zzzap",
		},
		text: {
			en: "Does 20 damage to each Pokémon in play that has a Pokémon Power. Don't apply Weakness and Resistance.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
