import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [553],

	name: {
		'en-us': "Krookodile",
		'fr-fr': "Crocorible",
		'es-es': "Krookodile",
		'it-it': "Krookodile",
		'pt-br': "Krookodile",
		'de-de': "Rabigator"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Krokorok",
		'fr-fr': "Escroco",
		'es-es': "Krokorok",
		'it-it': "Krokorok",
		'pt-br': "Krokorok",
		'de-de': "Rokkaiman"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dredge Up",
				'fr-fr': "Extraction",
				'es-es': "Ventilar",
				'it-it': "Dragaggio",
				'pt-br': "Dragar",
				'de-de': "Ausbaggern"
			},
			effect: {
				'en-us': "Discard the top 3 cards of your opponent's deck.",
				'fr-fr': "Défaussez les 3 cartes du dessus du deck de votre adversaire.",
				'es-es': "Descarta las 3 primeras cartas de la baraja de tu rival.",
				'it-it': "Scarta le prime tre carte del mazzo del tuo avversario.",
				'pt-br': "Descarte as 3 cartas de cima do baralho do seu oponente.",
				'de-de': "Lege die obersten 3 Karten des Decks deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tantrum",
				'fr-fr': "Mauvaise Humeur",
				'es-es': "Rabieta",
				'it-it': "Collera",
				'pt-br': "Petulância",
				'de-de': "Rappel"
			},
			effect: {
				'en-us': "This Pokémon is now Confused.",
				'fr-fr': "Ce Pokémon est maintenant Confus.",
				'es-es': "Este Pokémon pasa a estar Confundido.",
				'it-it': "Questo Pokémon viene confuso.",
				'pt-br': "Este Pokémon agora está Confuso.",
				'de-de': "Dieses Pokémon ist jetzt verwirrt."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "It conceals itself in sandstorms that Flygon whip up and waits patiently for prey to appear."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511965,
				tcgplayer: 226562
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511965,
				tcgplayer: 226562
			}
		},
	],
}

export default card
