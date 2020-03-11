import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-24",
	localId: 24,

	// Card informations
	name: {
		en: "Tympole",
		fr: "Tritonde",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 535,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/24/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/24/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/24/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
