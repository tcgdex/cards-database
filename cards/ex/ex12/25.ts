import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-25",
	localId: 25,

	// Card informations
	name: {
		en: "Solrock",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 338,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hisao Nakamura",

	abilities: [{
		id: 992,
		type: AbilityType.POKEBODY,
		name: {
			en: "Luna Shade",
		},
		text: {
			en: "As long as you have Lunatone in play, each player's Colorless Pokémon (excluding Pokémon-ex) can't use any Poké-Powers.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Call for Family",
		},
		text: {
			en: "Search your deck for a Lunatone and put it onto your Bench. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Hyper Beam",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
