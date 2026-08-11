import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [67],
	set: Set,

	name: {
		'fr-fr': "Machopeur",
		'en-us': "Machoke",
		'es-es': "Machoke",
		'it-it': "Machoke",
		'pt-br': "Machoke",
		'de-de': "Maschock"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Machoc",
		'en-us': "Machop",
		'es-es': "Machop",
		'it-it': "Machop",
		'pt-br': "Machop",
		'de-de': "Machollo"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'fr-fr': "Pousse-Montagnes",
			'en-us': "Mountain Ramming",
			'es-es': "Empuje Montaña",
			'it-it': "Speronamonte",
			'pt-br': "Colisão Montanhosa",
			'de-de': "Bergramme"
		},

		effect: {
			'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
			'en-us': "Discard the top card of your opponent's deck.",
			'es-es': "Descarta la primera carta de la baraja de tu rival.",
			'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Descarte a carta de cima do baralho do seu oponente.",
			'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Its formidable body never gets tired. It helps people by doing work such as the moving of heavy goods.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733662,
				tcgplayer: 516383,
				cardtrader: 261192
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733662,
				tcgplayer: 516383,
				cardtrader: 261192
			}
		},
	],

	illustrator: "Ryuta Fuse",

	
}

export default card
