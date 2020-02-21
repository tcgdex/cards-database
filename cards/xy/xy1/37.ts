import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-37",
	localId: 37,

	// Card informations
	name: {
		en: "Panpour",
		fr: "Flotajou",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 515,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/37/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/37/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/37/high",
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
			Type.WATER
		],
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Splash",
			fr: "Éclaboussure",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
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
