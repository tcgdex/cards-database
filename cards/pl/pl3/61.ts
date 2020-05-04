import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-61",
	localId: 61,

	// Card informations
	name: {
		en: "Hippopotas",
		fr: "Hippopotas",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 449,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/61/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/61/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Headbutt",
			fr: "Double coup d'boule",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mud Shot",
			fr: "Tir de boue",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
