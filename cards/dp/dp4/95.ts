import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-95",
	localId: 95,

	// Card informations
	name: {
		en: "Wingull",
		fr: "Goelise",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 278,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/95/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/95/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Drip",
			fr: "Goutte à goutte",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
			fr: "Cru-aile",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
