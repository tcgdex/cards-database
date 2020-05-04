import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-26",
	localId: 26,

	// Card informations
	name: {
		en: "Skarmory",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 227,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/26/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 21,
		type: AbilityType.POKEBODY,
		name: {
			en: "Metallic Lift",
		},
		text: {
			en: "If Skarmory has any Metal Energy attached to it, the Retreat Cost for Skarmory is 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Spearhead",
		},
		text: {
			en: "Draw a card.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Metal",
		},
		text: {
			en: "Flip a coin for each Metal Energy attached to Skarmory. This attack does 10 damage plus 20 more damage for each heads.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
