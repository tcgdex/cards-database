import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-69",
	localId: 69,

	// Card informations
	name: {
		en: "Sandile",
		fr: "Mascaïman",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 551,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/69/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/69/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/69/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
