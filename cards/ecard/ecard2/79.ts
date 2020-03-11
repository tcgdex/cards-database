import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-79",
	localId: 79,

	// Card informations
	name: {
		en: "Grimer",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 88,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Keiji Kinebuchi",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Poison Sludge",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
