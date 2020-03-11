import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy0-23",
	localId: 23,

	// Card informations
	name: {
		en: "Granbull",
		fr: "Granbull",
	},

	hp: 100,

	type: [
		Type.FAIRY,
	],

	dexId: 210,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy0/23/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy0/23/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/23/high",
		},
	},

	evolveFrom: {
		en: "Snubbull",
		fr: "Snubbull",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
		},
		damage: 30
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Stomp",
			fr: "Double Écrasement",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Kalos Starter Set",
		code: "xy0"
	}
}

export default card
