import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-48",
	localId: 48,

	// Card informations
	name: {
		en: "Dewpider",
		fr: "Araqua",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 751,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/48/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/48/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/48/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/48/high.png",
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
			Type.WATER
		],
		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
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
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

