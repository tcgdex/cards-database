import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Fletchling",
		fr: "Passerouge",
	},
	illustrator: "You Iribi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		661,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Growl",
				fr: "Rugissement",
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon's attacks do 20 less damage (before applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flap",
				fr: "Battement",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
