import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "det1-SM200",
	localId: "SM200",

	// Card informations
	name: {
		fr: "Snubbull",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],



	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/sm/det1/SM200/low.png",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/sm/det1/SM200/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 198,
		name: "Framestore"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			fr: "Morsure",
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
		name: "Détective Pikachu",
		code: "det1"
	}
}

export default card

