import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-67",
	localId: 67,

	// Card informations
	name: {
		en: "Igglybuff",
	},

	hp: 30,

	type: [
		Type.COLORLESS,
	],

	dexId: 174,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Keiko Fukuyama",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Heal",
		},
		text: {
			en: "Choose 1 of your Pokémon with an Energy card attached to it. Remove 1 damage counter from that Pokémon.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
