import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Houndoom EX",
		'fr-fr': "Démolosse EX",
		'es-es': "Houndoom EX",
		'it-it': "Houndoom EX",
		'pt-br': "Houndoom EX",
		'de-de': "Hundemon EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 170,

	types: [
		"Fire",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Melting Horn",
				'fr-fr': "Corne de Fusion",
				'es-es': "Cuerno Derretidor",
				'it-it': "Scioglicorno",
				'pt-br': "Chifre de Fusão",
				'de-de': "Schmelzhorn"
			},
			effect: {
				'en-us': "Discard the top 2 cards of your opponent's deck.",
				'fr-fr': "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
				'es-es': "Descarta las 2 primeras cartas de la baraja de tu rival.",
				'it-it': "Scarta le prime due carte del mazzo del tuo avversario.",
				'pt-br': "Descarte os 2 cards de cima do baralho do seu oponente.",
				'de-de': "Lege die obersten 2 Karten vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Grand Flame",
				'fr-fr': "Flamme Colossale",
				'es-es': "Llama Colosal",
				'it-it': "Megafiammata",
				'pt-br': "Grande Chama",
				'de-de': "Gewaltige Flamme"
			},
			effect: {
				'en-us': "Attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez une carte Énergie Fire de votre pile de défausse à l'un de vos Pokémon de Banc.",
				'es-es': "Une 1 carta de Energía Fire de tu pila de descartes a 1 de tus Pokémon en Banca.",
				'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia Fire dalla tua pila degli scarti.",
				'pt-br': "Ligue um card de Energia Fire da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				'de-de': "Lege 1 Fire-Energiekarte von deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 286267,
		tcgplayer: 107140
	}
}

export default card
