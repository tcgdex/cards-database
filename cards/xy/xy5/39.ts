import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-39",
	localId: 39,

	// Card informations
	name: {
		en: "Barboach",
		fr: "Barloche",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 339,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/39/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/39/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/39/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/39/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card

