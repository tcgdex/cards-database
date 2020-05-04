import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-23",
	localId: 23,

	// Card informations
	name: {
		en: "Magby",
	},

	hp: 30,

	type: [
		Type.FIRE,
	],

	dexId: 240,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/23/high",
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
			en: "Sputter",
		},
		text: {
			en: "All Pokémon Powers stop working until the end of your next turn.",
		},
		damage: 10
	}],







	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
