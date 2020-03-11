import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-90",
	localId: 90,

	// Card informations
	name: {
		en: "Purrloin",
		fr: "Chacripan",
	},

	hp: 50,

	type: [
		Type.DARKNESS,
	],

	dexId: 509,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/90/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/90/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/90/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Captivate",
			fr: "Séduction",
		},
		text: {
			en: "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire.",
		},
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
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
