import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-90",
	localId: 90,

	// Card informations
	name: {
		en: "Remoraid",
		fr: "Remoraid",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 223,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/90/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/90/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/90/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Splash",
			fr: "Trempette",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Trickle",
			fr: "Goutte à goutte",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
