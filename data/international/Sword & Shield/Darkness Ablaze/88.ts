import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [248],

	name: {
		'en-us': "Tyranitar",
		'fr-fr': "Tyranocif",
		'es-es': "Tyranitar",
		'it-it': "Tyranitar",
		'pt-br': "Tyranitar",
		'de-de': "Despotar"
	},

	illustrator: "nagimiso",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 180,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect",
		'es-es': "Pupitar",
		'it-it': "Pupitar",
		'pt-br': "Pupitar",
		'de-de': "Pupitar"
	},

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bedrock Breaker",
				'fr-fr': "Brise Fondation",
				'es-es': "Rompecimientos",
				'it-it': "Infrangiroccia",
				'pt-br': "Quebrador de Alicerce",
				'de-de': "Felsgrundbrecher"
			},
			effect: {
				'en-us': "Discard a Stadium in play.",
				'fr-fr': "Défaussez un Stade en jeu.",
				'es-es': "Descarta un Estadio en juego.",
				'it-it': "Scarta una carta Stadio in gioco.",
				'pt-br': "Descarte 1 Estádio em jogo.",
				'de-de': "Lege 1 Stadionkarte im Spiel auf den Ablagestapel."
			},
			damage: 120,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mountain Swing",
				'fr-fr': "Frappe Montagneuse",
				'es-es': "Embestida Montaña",
				'it-it': "Oscillamonte",
				'pt-br': "Tacada Montanhosa",
				'de-de': "Bergschwinger"
			},
			effect: {
				'en-us': "Discard the top 5 cards of your deck.",
				'fr-fr': "Défaussez les 5 cartes du dessus de votre deck.",
				'es-es': "Descarta las 5 primeras cartas de tu baraja.",
				'it-it': "Scarta le prime cinque carte del tuo mazzo.",
				'pt-br': "Descarte as 5 cartas de cima do seu baralho.",
				'de-de': "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel."
			},
			damage: 250,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "Its body can't be harmed by any sort of attack, so it is very eager to make challenges against enemies."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483319,
				tcgplayer: 219477
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483319,
				tcgplayer: 219477
			}
		},
	],
}

export default card
