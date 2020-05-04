import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-84",
	localId: 84,

	// Card informations
	name: {
		en: "Minccino",
		fr: "Chinchidou",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 572,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/84/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/84/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Last Resort",
			fr: "Dernierecour",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
