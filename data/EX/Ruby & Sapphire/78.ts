import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Wurmple",
		fr: "Chenipotte"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		265,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Signs of Evolution",
				fr: "Signes d'évolution"
			},
			effect: {
				en: "Search your deck for Silcoon and Beautifly, or Cascoon and Dustox cards. Show 1 card or both cards of a pair to your opponent and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck les Pokémon Armulys et Charmillon ou Blindalys et Papinox. Montrez à votre adversaire la ou les cartes composant une paire et placez-les dans votre main. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Barb",
				fr: "Barbelés empoisonnés"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné."
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
