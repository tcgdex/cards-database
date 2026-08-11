import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [1017],
	set: Set,

	name: {
		'en-us': "Cornerstone Mask Ogerpon",
		'fr-fr': "Ogerpon Masque de la Pierre",
		'de-de': "Fundamentmaske-Ogerpon",
		'it-it': "Ogerpon Maschera Fondamenta",
		'es-es': "Ogerpon Máscara Cimiento",
		'pt-br': "Ogerpon Máscara Alicerce",
		'es-mx': "Ogerpon Máscara Cimiento"
	},


	illustrator: "Kazumasa Yasukuni",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rock Kagura",
			'fr-fr': "Kagura Roche",
			'de-de': "Gesteins-Kagura",
			'it-it': "Kagura della Roccia",
			'es-es': "Kagura Roca",
			'pt-br': "Kagura de Pedra",
			'es-mx': "Kagura de Roca"
		},

		effect: {
			'en-us': "Search your deck for a Basic {F} Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie {F} de base, puis attachez-la à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-{F}-Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo una carta Energia base {F} e assegnala a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
			'es-es': "Busca en tu baraja 1 carta de Energía {F} Básica y únela a uno de tus Pokémon. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por uma carta de Energia {F} Básica no seu baralho e ligue-a a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo 1 carta de Energía {F} Básica y únela a 1 de tus Pokémon. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Mountain Ramming",
			'fr-fr': "Pousse-Montagnes",
			'de-de': "Bergramme",
			'it-it': "Speronamonte",
			'es-es': "Empuje Montaña",
			'pt-br': "Colisão Montanhosa",
			'es-mx': "Empuje Montañoso"
		},

		effect: {
			'en-us': "Discard the top card of your opponent's deck.",
			'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
			'de-de': "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
			'es-es': "Descarta la primera carta de la baraja de tu rival.",
			'pt-br': "Descarte a carta de cima do baralho do seu oponente.",
			'es-mx': "Descarta la primera carta del mazo de tu rival."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825985,
				tcgplayer: 632919
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825985,
				tcgplayer: 632919
			}
		},
	],
}

export default card
