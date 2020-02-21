import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC17",
	localId: "RC17",

	// Card informations
	name: {
		en: "Flabébé",
		fr: "Flabébé",
	},

	hp: 40,

	type: [
		Type.FAIRY,
	],

	dexId: 669,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC17/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC17/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC17/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe",
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
		name: "Generations",
		code: "g1"
	}
}

export default card
