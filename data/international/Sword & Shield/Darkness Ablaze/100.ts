import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [88],

	name: {
		'en-us': "Grimer",
		'fr-fr': "Tadmorv",
		'es-es': "Grimer",
		'it-it': "Grimer",
		'pt-br': "Grimer",
		'de-de': "Sleima"
	},

	illustrator: "Ryota Murayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Stomp Off",
				'fr-fr': "Tohu-Bohu",
				'es-es': "Pisotear",
				'it-it': "Pestatura",
				'pt-br': "Sair Irritado",
				'de-de': "Davonstapfen"
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
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sludge Whirlpool",
				'fr-fr': "Tourbillon de Boue",
				'es-es': "Torbellino de Residuos",
				'it-it': "Fangovortice",
				'pt-br': "Redemoinho de Lodo",
				'de-de': "Schlammstrudel"
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

	retreat: 3,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "The wastewater coming from factories is clean these days, so Grimer have nothing to eat. They're said to be on the verge of extinction."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483379,
				tcgplayer: 219401
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483379,
				tcgplayer: 219401
			}
		},
	],
}

export default card
