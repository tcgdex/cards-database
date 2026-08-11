import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [483],
	set: Set,

	name: {
		'en-us': "Dialga",
		'fr-fr': "Dialga",
		'es-es': "Dialga",
		'it-it': "Dialga",
		'pt-br': "Dialga",
		'de-de': "Dialga"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Time Manipulation",
			'fr-fr': "Manipulation Temporelle",
			'es-es': "Manipulación Temporal",
			'it-it': "Manipolazione Temporale",
			'pt-br': "Manipulação do Tempo",
			'de-de': "Zeitmanipulation"
		},

		effect: {
			'en-us': "Search your deck for 2 cards, shuffle your deck, then put those cards on top of it in any order.",
			'fr-fr': "Cherchez 2 cartes dans votre deck. Mélangez votre deck, puis placez ces cartes sur le dessus de votre deck dans l'ordre de votre choix.",
			'es-es': "Busca en tu baraja 2 cartas, baraja las cartas de tu baraja y, luego, pon esas cartas en la parte superior de tu baraja en el orden que quieras.",
			'it-it': "Cerca nel tuo mazzo due carte, rimischia le carte del tuo mazzo, poi metti quelle carte in cima al mazzo nell'ordine che preferisci.",
			'pt-br': "Procure por 2 cartas no seu baralho, embaralhe o seu baralho e, em seguida, coloque aquelas cartas como as cartas de cima do seu baralho em qualquer ordem.",
			'de-de': "Durchsuche dein Deck nach 2 Karten, mische dein Deck und lege jene Karten anschließend in beliebiger Reihenfolge auf dein Deck."
		}
	}, {
		cost: ["Psychic", "Metal", "Colorless"],

		name: {
			'en-us': "Buster Tail",
			'fr-fr': "Queue Destructrice",
			'es-es': "Cola Destructora",
			'it-it': "Coda Distruttrice",
			'pt-br': "Cauda Aniquiladora",
			'de-de': "Zertrümmernder Schweif"
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794508,
				tcgplayer: 589918
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794508,
				tcgplayer: 589918
			}
		},
	],

	illustrator: "Takumi Wada",

}

export default card
