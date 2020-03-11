import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-109",
	localId: 109,

	// Card informations
	name: {
		en: "Kricketot",
		fr: "Crikzik",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 401,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/109/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/109/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/109/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Headbutt",
			fr: "Coup d'boule",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Beat",
			fr: "Bataille",
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
