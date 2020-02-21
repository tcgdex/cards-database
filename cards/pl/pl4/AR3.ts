import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-AR3",
	localId: "AR3",

	// Card informations
	name: {
		en: "Arceus",
		fr: "Arceus",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 493,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/AR3/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/AR3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/AR3/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/AR3/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 41,
		name: "Wataru Kawahara"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bright Flame",
			fr: "Flamme éclatante",
		},
		text: {
			en: "Flip a coin. If tails, discard 2 Energy attached to Arceus.",
			fr: "Lancez une pièce. Si c'est pile, défaussez 2 Énergies attachées à Arceus.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
