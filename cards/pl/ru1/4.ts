import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ru1-4",
	localId: 4,

	// Card informations
	name: {
		en: "Heatran",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 485,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/ru1/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/ru1/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],





	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heat Boiler",
		},
		text: {
			en: "If the Defending Pokémon is a Water Pokémon, this attack does 60 damage plus 40 more damage.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Pokémon Rumble",
		code: "ru1"
	}
}

export default card
