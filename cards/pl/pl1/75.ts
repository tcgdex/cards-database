import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-75",
	localId: 75,

	// Card informations
	name: {
		en: "Grimer",
		fr: "Tadmorv",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 88,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/75/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/75/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		name: {
			en: "Division",
			fr: "Division",
		},
		text: {
			en: "Search your deck for Grimer and put it onto your Bench. Shuffle your deck afterward.",
			fr: "Cherchez Tadmorv dans votre deck et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Poison Gas",
			fr: "Gaz toxik",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
