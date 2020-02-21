import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-46",
	localId: 46,

	// Card informations
	name: {
		en: "Spheal",
		fr: "Obalie",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 363,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/46/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/46/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/46/high",
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
			Type.WATER
		],
		name: {
			en: "Ice Ball",
			fr: "Ball'Glace",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
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
