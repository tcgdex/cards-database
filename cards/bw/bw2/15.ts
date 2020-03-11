import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-15",
	localId: 15,

	// Card informations
	name: {
		en: "Deerling",
		fr: "Vivaldaim",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 585,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/15/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/15/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/15/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",



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
			Type.GRASS
		],
		name: {
			en: "Wild Kick",
			fr: "Coup Déchaîné",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
