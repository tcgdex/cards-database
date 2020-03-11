import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-53",
	localId: 53,

	// Card informations
	name: {
		en: "Trapinch",
		fr: "Kraknoix",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 328,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/53/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/53/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/53/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Mountain Munch",
			fr: "Dévore-Montagne",
		},
		text: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
