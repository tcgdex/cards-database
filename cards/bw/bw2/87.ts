import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-87",
	localId: 87,

	// Card informations
	name: {
		en: "Rufflet",
		fr: "Furaiglon",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 627,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/87/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/87/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Peck",
			fr: "Picpic",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Claw",
			fr: "Ergots",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
