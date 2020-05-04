import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-106",
	localId: 106,

	// Card informations
	name: {
		en: "Nihilego",
		fr: "Zéroïd",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 793,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/106/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/106/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/106/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Nightcap",
			fr: "Encore Un",
		},
		text: {
			en: "You can use this attack only if your opponent has exactly 2 Prize cards remaining. Choose 1 of your opponent's Pokémon's attacks and use it as this attack.",
			fr: "Vous ne pouvez utiliser cette attaque que s’il reste exactement 2 cartes Récompense à votre adversaire. Choisissez l’une des attaques des Pokémon de votre adversaire et utilisez-la en tant que cette attaque.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Void Tentacles",
			fr: "Tentacules du Néant",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
