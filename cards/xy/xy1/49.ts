import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-49",
	localId: 49,

	// Card informations
	name: {
		en: "Spoink",
		fr: "Spoink",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 325,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/49/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/49/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/49/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Splash",
			fr: "Trempette",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
