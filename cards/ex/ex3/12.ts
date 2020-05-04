import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-12",
	localId: 12,

	// Card informations
	name: {
		en: "Torkoal",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 324,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Power Generation",
		},
		text: {
			en: "Search your discard pile for up to 2 basic Energy cards, show them to your opponent, and put them into your hand.",
		},
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Scorching Smoke",
		},
		text: {
			en: "The Defending Pokémon is now Burned. Flip a coin. If tails, discard a Fire Energy card attached to Torkoal.",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
