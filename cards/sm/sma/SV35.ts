import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV35",
	localId: "SV35",

	// Card informations
	name: {
		en: "Kirlia",
		fr: "Kirlia",
	},

	hp: 80,

	type: [
		Type.FAIRY,
	],

	dexId: 281,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV35/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV35/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV35/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV35/high.png",
		},
	},

	evolveFrom: {
		en: "Ralts",
		fr: "Tarsal",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Smack",
			fr: "Claque",
		},
		damage: 20
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
		},
		damage: 30
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
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card

