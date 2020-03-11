import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-16",
	localId: 16,

	// Card informations
	name: {
		en: "Girafarig",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 203,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Aya Kusube",

	abilities: [{
		id: 385,
		type: AbilityType.POKEBODY,
		name: {
			en: "Rear Sensor",
		},
		text: {
			en: "Each player's Active Basic Pokémon (excluding Pokémon-ex) can't use any Poké-Powers.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Foresight",
		},
		text: {
			en: "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order you like.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Disorder",
		},
		text: {
			en: "If the Defending Pokémon has any Special Energy cards attached to it, the Defending Pokémon is now Confused.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
