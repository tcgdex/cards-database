import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-50",
	localId: 50,

	// Card informations
	name: {
		en: "Woobat",
		fr: "Chovsourir",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 527,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/50/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/50/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/50/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gust",
			fr: "Tornade",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
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
