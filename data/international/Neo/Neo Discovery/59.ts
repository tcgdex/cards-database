import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Natu",
		'fr-fr': "Natu",
		'de-de': "Natu"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		177,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde folie",
				'de-de': "Konfustrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt verwirrt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It usually forages for food on the ground but may, on rare occasions, hop onto branches to peck at shoots.",
		'fr-fr': "Il picore souvent le sol à la recherche de nourriture mais, de temps en temps, il saute sur les branches pour picorer des pousses."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274570,
				tcgplayer: 87680
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274570,
				tcgplayer: 87680
			}
		}
	]
}

export default card

