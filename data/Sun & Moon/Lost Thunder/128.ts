import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Durant",
		fr: "Fermite",
		es: "Durant",
		it: "Durant",
		pt: "Durant",
		de: "Fermicula"
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
				en: "Knock Over",
				fr: "Culbute",
				es: "Tumbar",
				it: "Sconvolgimento",
				pt: "Arrebatar",
				de: "Umwerfen"
			},
			effect: {
				en: "You may discard any Stadium card in play.",
				fr: "Vous pouvez défausser toute carte Stade en jeu.",
				es: "Puedes descartar cualquier carta de Estadio en juego.",
				it: "Puoi scartare una carta Stadio in gioco.",
				pt: "Você pode descartar qualquer carta de Estádio em jogo.",
				de: "Du kannst 1 beliebige Stadionkarte im Spiel auf den Ablagestapel legen."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mountain Munch",
				fr: "Dévore-Montagne",
				es: "Mascamontañas",
				it: "Sgranocchiacime",
				pt: "Masca-montanhas",
				de: "Gipfelmampfer"
			},
			effect: {
				en: "Discard the top 2 cards of your opponent’s deck.",
				fr: "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
				es: "Descarta las 2 primeras cartas de la baraja de tu rival.",
				it: "Scarta le prime due carte del mazzo del tuo avversario.",
				pt: "Descarte as 2 primeiras cartas do baralho do seu oponente.",
				de: "Lege die obersten 2 Karten vom Deck deines Gegners auf seinen Ablagestapel."
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



}

export default card
