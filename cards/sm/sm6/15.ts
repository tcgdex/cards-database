import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-15",
	localId: 15,

	// Card informations
	name: {
		en: "Fennekin",
		fr: "Feunnec",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 653,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/15/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/15/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/15/high",
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
			Type.FIRE
		],
		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Rear Kick",
			fr: "Ruade",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
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
