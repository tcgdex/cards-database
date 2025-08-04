import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Houndoom EX",
		fr: "Démolosse EX",
		es: "Houndoom EX",
		it: "Houndoom EX",
		pt: "Houndoom EX",
		de: "Hundemon EX"
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
				en: "Melting Horn",
				fr: "Corne de Fusion",
				es: "Cuerno Derretidor",
				it: "Scioglicorno",
				pt: "Chifre de Fusão",
				de: "Schmelzhorn"
			},
			effect: {
				en: "Discard the top 2 cards of your opponent's deck.",
				fr: "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
				es: "Descarta las 2 primeras cartas de la baraja de tu rival.",
				it: "Scarta le prime due carte del mazzo del tuo avversario.",
				pt: "Descarte os 2 cards de cima do baralho do seu oponente.",
				de: "Lege die obersten 2 Karten vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Grand Flame",
				fr: "Flamme Colossale",
				es: "Llama Colosal",
				it: "Megafiammata",
				pt: "Grande Chama",
				de: "Gewaltige Flamme"
			},
			effect: {
				en: "Attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie Fire de votre pile de défausse à l'un de vos Pokémon de Banc.",
				es: "Une 1 carta de Energía Fire de tu pila de descartes a 1 de tus Pokémon en Banca.",
				it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia Fire dalla tua pila degli scarti.",
				pt: "Ligue um card de Energia Fire da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				de: "Lege 1 Fire-Energiekarte von deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
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
