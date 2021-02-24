import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		79,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Growl",
				fr: "Rugissement",
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon's attacks do 20 less damage (before applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Whap",
				fr: "Queue Battoir",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
