import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-43",
	localId: 43,

	// Card informations
	name: {
		en: "Victini",
		fr: "Victini",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 494,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/43/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/43/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/43/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "V-blast",
			fr: "Explo-Victoire",
		},
		text: {
			en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
			fr: "Lancez 2 pièces. Si vous obtenez au moins un côté pile, cette attaque ne fait rien.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
