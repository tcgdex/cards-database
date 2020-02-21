import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-22",
	localId: 22,

	// Card informations
	name: {
		en: "Froakie",
		fr: "Grenousse",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 656,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/22/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/22/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/22/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
		},
		damage: 10
	},{
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
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
