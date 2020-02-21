import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-18",
	localId: 18,

	// Card informations
	name: {
		en: "Litleo",
		fr: "Hélionceau",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 667,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/18/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/18/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/18/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Headbutt",
			fr: "Coup d’Boule",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
