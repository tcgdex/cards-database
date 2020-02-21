import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-96",
	localId: 96,

	// Card informations
	name: {
		en: "Cherubi",
		fr: "Ceribou",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 420,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/96/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/96/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},



	attacks: [{
		name: {
			en: "Growth",
			fr: "Croissance",
		},
		text: {
			en: "Attach a Grass Energy card from your hand to Cherubi.",
			fr: "Attachez une carte Énergie Grass de votre main à Ceribou.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Razor Leaf",
			fr: "Tranch'herbe",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
