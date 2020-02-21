import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-43",
	localId: 43,

	dexId: 98,

	// Card informations
	name: {
		en: "Krabby",
		fr: "Krabby",
	},

	hp: 80,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/43/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/43/low",
		}
	},

	evolveTo: [{
		en: "Kingler",
		fr: "Krabboss",
	}],

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 35,
		name: "miki kudo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Super Slice",
			fr: "Super Tranche",
		},
		text: {
			en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
			fr: "Lancez 2 pièces. Si vous obtenez au moins un côté pile, cette attaque ne fait rien.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
