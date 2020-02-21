import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-67",
	localId: 67,

	// Card informations
	name: {
		en: "Makuhita",
		fr: "Makuhita",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 296,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/67/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/67/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 59,
		name: "Mina Nakai"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Strength",
			fr: "Force",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
