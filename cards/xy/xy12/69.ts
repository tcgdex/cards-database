import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-69",
	localId: 69,

	// Card informations
	name: {
		en: "Doduo",
		fr: "Doduo",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 84,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/69/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/69/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/69/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fury Attack",
			fr: "Furie",
		},
		text: {
			en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
