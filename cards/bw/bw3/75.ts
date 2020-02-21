import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-75",
	localId: 75,

	// Card informations
	name: {
		en: "Pawniard",
		fr: "Scalpion",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 624,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/75/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/75/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Iron Head",
			fr: "Tête de Fer",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
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
