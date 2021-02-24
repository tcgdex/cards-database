import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Dustox",
		fr: "Papinox",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		269,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Cascoon",
		fr: "Blindalys",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hazardous Evolution",
				fr: "Évolution Risquée",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may leave your opponent's Active Pokémon Paralyzed and Poisoned. If you do, put 3 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Empoisonné et Paralysé. Dans ce cas, placez 3 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
