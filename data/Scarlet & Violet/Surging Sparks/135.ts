import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [483],
	set: Set,

	name: {
		en: "Dialga",
		fr: "Dialga",
		es: "Dialga",
		it: "Dialga",
		pt: "Dialga",
		de: "Dialga"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Time Manipulation",
			fr: "Manipulation Temporelle",
			es: "Manipulación Temporal",
			it: "Manipolazione Temporale",
			pt: "Manipulação do Tempo",
			de: "Zeitmanipulation"
		},

		effect: {
			en: "Search your deck for 2 cards, shuffle your deck, then put those cards on top of it in any order.",
			fr: "Cherchez 2 cartes dans votre deck. Mélangez votre deck, puis placez ces cartes sur le dessus de votre deck dans l'ordre de votre choix.",
			es: "Busca en tu baraja 2 cartas, baraja las cartas de tu baraja y, luego, pon esas cartas en la parte superior de tu baraja en el orden que quieras.",
			it: "Cerca nel tuo mazzo due carte, rimischia le carte del tuo mazzo, poi metti quelle carte in cima al mazzo nell'ordine che preferisci.",
			pt: "Procure por 2 cartas no seu baralho, embaralhe o seu baralho e, em seguida, coloque aquelas cartas como as cartas de cima do seu baralho em qualquer ordem.",
			de: "Durchsuche dein Deck nach 2 Karten, mische dein Deck und lege jene Karten anschließend in beliebiger Reihenfolge auf dein Deck."
		}
	}, {
		cost: ["Psychic", "Metal", "Colorless"],

		name: {
			en: "Buster Tail",
			fr: "Queue Destructrice",
			es: "Cola Destructora",
			it: "Coda Distruttrice",
			pt: "Cauda Aniquiladora",
			de: "Zertrümmernder Schweif"
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "Takumi Wada"
}

export default card
