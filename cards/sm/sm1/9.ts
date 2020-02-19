import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-9",
	localId: 9,

	// Card informations
	name: {
		en: "Rowlet",
		fr: "Brindibou",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 722,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/9/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/9/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/9/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/9/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
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
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leafage",
			fr: "Feuillage",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

