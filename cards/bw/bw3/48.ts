import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-48",
	localId: 48,

	// Card informations
	name: {
		en: "Trubbish",
		fr: "Miamiasme",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 568,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/48/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/48/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/48/high",
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
			en: "Garbage Collection",
			fr: "Fouille Poubelle",
		},
		text: {
			en: "Put a card from your discard pile on top of your deck.",
			fr: "Mettez n'importe quelle carte de votre pile de défausse sur le dessus de votre deck.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Sludge Bomb",
			fr: "Bomb-Beurk",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
