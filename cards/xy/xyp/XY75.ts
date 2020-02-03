import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY75",
	localId: "XY75",

	// Card informations
	name: {
		en: "Palkia",
		fr: "Palkia",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 484,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY75/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY75/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY75/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY75/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Cross Slicer",
		},
		text: {
			en: "Your opponent can't attach Energy from his or her hand to the Defending Pokémon during his or her next turn.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card

