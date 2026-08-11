import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Durant",
		'fr-fr': "Fermite",
		'es-es': "Durant",
		'it-it': "Durant",
		'pt-br': "Durant",
		'de-de': "Fermicula"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		632,
	],

	hp: 80,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Knock Over",
				'fr-fr': "Culbute",
				'es-es': "Tumbar",
				'it-it': "Sconvolgimento",
				'pt-br': "Arrebatar",
				'de-de': "Umwerfen"
			},
			effect: {
				'en-us': "You may discard any Stadium card in play.",
				'fr-fr': "Vous pouvez défausser toute carte Stade en jeu.",
				'es-es': "Puedes descartar cualquier carta de Estadio en juego.",
				'it-it': "Puoi scartare una carta Stadio in gioco.",
				'pt-br': "Você pode descartar qualquer carta de Estádio em jogo.",
				'de-de': "Du kannst 1 beliebige Stadionkarte im Spiel auf den Ablagestapel legen."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mountain Munch",
				'fr-fr': "Dévore-Montagne",
				'es-es': "Mascamontañas",
				'it-it': "Sgranocchiacime",
				'pt-br': "Masca-montanhas",
				'de-de': "Gipfelmampfer"
			},
			effect: {
				'en-us': "Discard the top 2 cards of your opponent’s deck.",
				'fr-fr': "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
				'es-es': "Descarta las 2 primeras cartas de la baraja de tu rival.",
				'it-it': "Scarta le prime due carte del mazzo del tuo avversario.",
				'pt-br': "Descarte as 2 primeiras cartas do baralho do seu oponente.",
				'de-de': "Lege die obersten 2 Karten vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They attack in groups, covering themselves in steel armor to protect themselves from Heatmor.",
	},

	thirdParty: {
		cardmarket: 365765,
		tcgplayer: 178943
	}
}

export default card
