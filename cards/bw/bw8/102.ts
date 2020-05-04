import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-102",
	localId: 102,

	// Card informations
	name: {
		en: "Togepi",
		fr: "Togepi",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 175,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/102/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/102/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Yawn",
			fr: "Bâillement",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
