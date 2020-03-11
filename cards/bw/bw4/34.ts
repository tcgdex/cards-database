import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-34",
	localId: 34,

	// Card informations
	name: {
		en: "Frillish",
		fr: "Viskuse",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 592,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/34/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/34/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/34/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bubble",
			fr: "Écume",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Spit Poison",
			fr: "Crache-Venin",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
