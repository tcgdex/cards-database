import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-70",
	localId: 70,

	// Card informations
	name: {
		en: "Cottonee",
		fr: "Doudouvet",
	},

	hp: 50,

	type: [
		Type.FAIRY,
	],

	dexId: 546,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/70/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/70/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/70/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 46,
		name: "MAHOU"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
