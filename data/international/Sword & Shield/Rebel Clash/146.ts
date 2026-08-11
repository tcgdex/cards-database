import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [659],

	name: {
		'en-us': "Bunnelby",
		'fr-fr': "Sapereau",
		'es-es': "Bunnelby",
		'it-it': "Bunnelby",
		'pt-br': "Bunnelby",
		'de-de': "Scoppel"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Burrow",
				'fr-fr': "Terrier",
				'es-es': "Escarbar",
				'it-it': "Buca",
				'pt-br': "Toca",
				'de-de': "Verbuddeln"
			},
			effect: {
				'en-us': "Discard the top card of your opponent's deck.",
				'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
				'es-es': "Descarta la primera carta de la baraja de tu rival.",
				'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
				'pt-br': "Descarte a carta de cima do baralho do seu oponente.",
				'de-de': "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Headbutt Bounce",
				'fr-fr': "Culbute Surprise",
				'es-es': "Bote Cabezazo",
				'it-it': "Rimbalzo Bottintesta",
				'pt-br': "Cabeçada Ricochete",
				'de-de': "Abrupter Kopfstoß"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 70,
	types: ["Colorless"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It excels at digging holes. Using its ears, it can dig a nest 33 feet deep in one night."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458128,
				tcgplayer: 213246
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458128,
				tcgplayer: 213246
			}
		},
	],
}

export default card
