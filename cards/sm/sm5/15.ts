import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-15",
	localId: 15,

	// Card informations
	name: {
		en: "Shaymin",
		fr: "Shaymin",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 492,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/15/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/15/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/15/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Coax",
			fr: "Amadouer",
		},
		text: {
			en: "Search your deck for up to 3 Basic Pokémon of different types and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 3 Pokémon de base de différents types dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Soothing Scent",
			fr: "Senteur Apaisante",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
