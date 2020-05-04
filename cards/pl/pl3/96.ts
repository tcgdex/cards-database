import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "Saya Tsuruta",



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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
