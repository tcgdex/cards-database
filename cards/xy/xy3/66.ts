import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-66",
	localId: 66,

	// Card informations
	name: {
		en: "Scraggy",
		fr: "Baggiguane",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 559,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/66/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/66/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
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
