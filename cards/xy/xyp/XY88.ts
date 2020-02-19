import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY88",
	localId: "XY88",

	// Card informations
	name: {
		en: "Chespin",
		fr: "Marisson",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 650,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY88/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY88/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY88/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY88/high.png",
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
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card

