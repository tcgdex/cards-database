import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Volcanion",
		fr: "Volcanion",
	},
	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		721,
	],
	hp: 120,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flare Starter",
				fr: "Allume Flambée",
			},
			effect: {
				en: "Search your deck for a Fire Energy card and attach it to 1 of your Pokémon. If you go second and it's your first turn, instead search for up to 3 Fire Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
				fr: "Cherchez une carte Énergie Fire dans votre deck et attachez-la à l’un de vos Pokémon. Si vous jouez en second et que c’est votre premier tour, cherchez jusqu’à 3 cartes Énergie Fire à la place et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "High-Heat Blast",
				fr: "Explosion Haute Température",
			},
			effect: {
				en: "If you have at least 4 Fire Energy in play, this attack does 60 more damage.",
				fr: "Si vous avez au moins 4 Énergies Fire en jeu, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
