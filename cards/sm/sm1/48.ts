import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-48",
	localId: 48,

	// Card informations
	name: {
		en: "Bruxish",
		fr: "Denticrisse",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 779,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/48/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/48/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/48/high",
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
			en: "Vivid Charge",
			fr: "Charge Vive",
		},
		text: {
			en: "Search your deck for up to 3 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 3 cartes Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Fangs",
			fr: "Psycho-Croc",
		},
		text: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
