import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-58",
	localId: 58,

	// Card informations
	name: {
		en: "Girafarig",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 203,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/58/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Energy Patch",
		},
		text: {
			en: "Take a basic Energy card attached to 1 of your Pokémon and attach it to another of your Pokémon.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Syncroblast",
		},
		text: {
			en: "If Girafarig and the Defending Pokémon don't have the same number of Energy cards attached to them, this attack's base damage is 10 instead of 40.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
