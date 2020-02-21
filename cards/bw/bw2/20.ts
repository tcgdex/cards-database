import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-20",
	localId: 20,

	// Card informations
	name: {
		en: "Darumaka",
		fr: "Darumarond",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 554,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/20/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/20/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/20/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Combustion",
			fr: "Fournaise",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
