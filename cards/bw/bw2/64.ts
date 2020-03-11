import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-64",
	localId: 64,

	// Card informations
	name: {
		en: "Purrloin",
		fr: "Chacripan",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 509,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/64/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/64/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/64/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Knock Off",
			fr: "Sabotage",
		},
		text: {
			en: "Flip a coin. If heads, discard a random card from your opponent's hand.",
			fr: "Lancez une pièce. Si c'est face, défaussez au hasard une carte de la main de votre adversaire.",
		},
		damage: 20
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
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
