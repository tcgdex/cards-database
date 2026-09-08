import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Victreebel",
		'fr-fr': "Empiflor",
		'de-de': "Sarzenia"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		71,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Weepinbell",
		'fr-fr': "Boustiflor"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Lure",
				'fr-fr': "Attraction",
				'de-de': "Köder"
			},
			effect: {
				'en-us': "If your opponent has any Benched Pokémon, choose 1 of them and switch it with his or her Active Pokémon.",
				'fr-fr': "Si votre adversaire a des Pokémon sur son Banc, choisissez l'un d'eux et échangez-le avec son Pokémon Actif.",
				'de-de': "Falls dein Gegner irgendwelche Pokémon auf der Bank hat, wähle eines von ihnen und tausche es mit dem aktiven Pokémon aus."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Acid",
				'fr-fr': "Acide",
				'de-de': "Kleber"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'de-de': "Wirf eine Münze. Bei Kopf kann sich das verteidigende Pokémon während des nächsten Zuges des Gegnersnicht zurückziehen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Said to live in huge colonies deep in jungles, although no one has ever returned from there.",
		'fr-fr': "Il vit en colonie dans la jungle mais personne n'en est jamais revenu vivant."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273811,
				tcgplayer: 106992
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273811,
				tcgplayer: 106992
			}
		}
	],
}

export default card
