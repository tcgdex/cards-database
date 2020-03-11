import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-32",
	localId: 32,

	// Card informations
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 54,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/32/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/32/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/32/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dazzle Dance",
			fr: "Danse Éblouissante",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
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
