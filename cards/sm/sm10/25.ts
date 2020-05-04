import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-25",
	localId: 25,

	// Card informations
	name: {
		en: "Volcanion",
		fr: "Volcanion",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 721,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/25/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/25/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Satoshi Shirai",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flare Starter",
			fr: "Allume Flambée",
		},
		text: {
			en: "Search your deck for a Fire Energy card and attach it to 1 of your Pokémon. If you go second and it's your first turn, instead search for up to 3 Fire Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Cherchez une carte Énergie Fire dans votre deck et attachez-la à l’un de vos Pokémon. Si vous jouez en second et que c’est votre premier tour, cherchez jusqu’à 3 cartes Énergie Fire à la place et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "High-Heat Blast",
			fr: "Explosion Haute Température",
		},
		text: {
			en: "If you have at least 4 Fire Energy in play, this attack does 60 more damage.",
			fr: "Si vous avez au moins 4 Énergies Fire en jeu, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
