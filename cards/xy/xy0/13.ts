import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy0-13",
	localId: 13,

	// Card informations
	name: {
		en: "Frogadier",
		fr: "Croâporal",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 657,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy0/13/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy0/13/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/13/high",
		},
	},

	evolveFrom: {
		en: "Froakie",
		fr: "Grenousse",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Drip",
			fr: "Goutte à Goutte",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Wave",
			fr: "Aqua-Vague",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Kalos Starter Set",
		code: "xy0"
	}
}

export default card
