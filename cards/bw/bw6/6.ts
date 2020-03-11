import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-6",
	localId: 6,

	// Card informations
	name: {
		en: "Wurmple",
		fr: "Chenipotte",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 265,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/6/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/6/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/6/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sleep Poison",
			fr: "Poison Dodo",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep and Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
