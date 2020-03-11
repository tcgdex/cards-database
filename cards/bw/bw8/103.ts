import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-103",
	localId: 103,

	// Card informations
	name: {
		en: "Togetic",
		fr: "Togetic",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 176,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/103/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/103/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/103/high",
		},
	},

	evolveFrom: {
		en: "Togepi",
		fr: "Togepi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sweet Kiss",
			fr: "Doux Baiser",
		},
		text: {
			en: "Your opponent draws a card.",
			fr: "Votre adversaire pioche une carte.",
		},
		damage: 30
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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
