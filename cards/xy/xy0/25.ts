import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy0-25",
	localId: 25,

	// Card informations
	name: {
		en: "Farfetch'd",
		fr: "Canarticho",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 83,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy0/25/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy0/25/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 30
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

	category: Category.POKEMON,

	set: {
		name: "Kalos Starter Set",
		code: "xy0"
	}
}

export default card
