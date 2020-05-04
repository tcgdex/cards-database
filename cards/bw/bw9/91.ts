import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-91",
	localId: 91,

	// Card informations
	name: {
		en: "Hoothoot",
		fr: "Hoothoot",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 163,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/91/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/91/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/91/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dual Draw",
			fr: "Pioche Mutuelle",
		},
		text: {
			en: "Each player draws 2 cards.",
			fr: "Chaque joueur pioche 2 cartes.",
		},
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
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
