import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [424],
	set: Set,

	name: {
		en: "Ambipom",
		fr: "Capidextre",
		es: "Ambipom",
		it: "Ambipom",
		pt: "Ambipom",
		de: "Ambidiffel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Aipom",
		fr: "Capumain",
		es: "Aipom",
		it: "Aipom",
		pt: "Aipom",
		de: "Griffel"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "All-You-Can-Grab",
			fr: "Libre-Service",
			es: "Agarre Libre",
			it: "Arraffatutto",
			pt: "Pegue à Vontade",
			de: "Schnäppchenjagd"
		},

		effect: {
			en: "Flip a coin until you get tails. Search your deck for a number of cards up to the number of heads and put them into your hand. Then, shuffle your deck.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cherchez dans votre deck un nombre de cartes inférieur ou égal au nombre de côtés face obtenus, puis placez-les dans votre main. Mélangez ensuite votre deck.",
			es: "Lanza 1 moneda hasta que salga cruz. Busca en tu baraja una cantidad de cartas igual o inferior al número de caras que te hayan salido y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Lancia una moneta finché non esce croce. Cerca nel tuo mazzo un numero di carte uguale o inferiore al numero di volte in cui è uscito testa e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Jogue 1 moeda até sair coroa. Procure por um número de cartas no seu baralho até o número de caras e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Durchsuche dein Deck nach bis zu so vielen Karten, wie du Kopf geworfen hast, und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Knock Off",
			fr: "Sabotage",
			es: "Desarme",
			it: "Privazione",
			pt: "Derrubar",
			de: "Abschlag"
		},

		effect: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
			es: "Descarta 1 carta aleatoria de la mano de tu rival.",
			it: "Scarta una carta a caso dalla mano del tuo avversario.",
			pt: "Descarte 1 carta aleatória da mão do seu oponente.",
			de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674155
	}
}

export default card