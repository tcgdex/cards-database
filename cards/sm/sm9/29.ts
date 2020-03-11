import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-29",
	localId: 29,

	// Card informations
	name: {
		en: "Magikarp",
		fr: "Magicarpe",
	},

	hp: 30,

	type: [
		Type.WATER,
	],

	dexId: 129,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/29/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/29/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/29/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Enter the Dragon",
			fr: "Porte du Dragon",
		},
		text: {
			en: "Flip a coin. If heads, put a card that evolves from this Pokémon from your discard pile onto this Pokémon to evolve it.",
			fr: "Lancez une pièce. Si c’est face, placez une carte Évolution de ce Pokémon de votre pile de défausse sur ce Pokémon pour le faire évoluer.",
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
		name: "Team Up",
		code: "sm9"
	}
}

export default card
