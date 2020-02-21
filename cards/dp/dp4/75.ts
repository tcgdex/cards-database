import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-75",
	localId: 75,

	// Card informations
	name: {
		en: "Krabby",
		fr: "Krabby",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 98,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/75/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/75/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/75/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Irongrip",
			fr: "Force Poigne",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Guillotine",
			fr: "Guillotine",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
