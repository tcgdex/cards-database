import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-68",
	localId: 68,

	// Card informations
	name: {
		en: "Scraggy",
		fr: "Baggiguane",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 559,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/68/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/68/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
