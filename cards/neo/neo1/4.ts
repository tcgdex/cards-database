import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-4",
	localId: 4,

	// Card informations
	name: {
		en: "Feraligatr",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 160,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/4/high",
		},
	},

	evolveFrom: {
		en: "Croconaw",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 897,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Berserk",
		},
		text: {
			en: "When you play Feraligatr from your hand, flip a coin. If heads, discard the top 5 cards from your opponent's deck. If tails, discard the top 5 cards from your deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Chomp",
		},
		text: {
			en: "Flip a number of coins equal to the number of damage counters on Feraligatr. This attack does 50 damage plus 10 more damage for each heads.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
