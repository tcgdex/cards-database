import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-44",
	localId: 44,

	// Card informations
	name: {
		en: "Machop",
		fr: "Machoc",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 66,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/44/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/44/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/44/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Knuckle Punch",
			fr: "Coud'Phalange",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
