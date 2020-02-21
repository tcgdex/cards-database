import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-93",
	localId: 93,

	// Card informations
	name: {
		en: "Bulbasaur",
		fr: "Bulbizarre",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 1,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/93/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/93/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
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
			en: "Vine Whip",
			fr: "Fouet lianes",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
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
