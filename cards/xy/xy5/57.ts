import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-57",
	localId: 57,

	// Card informations
	name: {
		en: "Chinchou",
		fr: "Loupio",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 170,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/57/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/57/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/57/high",
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
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
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
