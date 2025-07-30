import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [130],
	set: Set,

	name: {
		en: "Gyarados",
		fr: "Léviator",
		es: "Gyarados",
		it: "Gyarados",
		pt: "Gyarados",
		de: "Garados"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
		es: "Magikarp",
		it: "Magikarp",
		pt: "Magikarp",
		de: "Karpador"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Wreak Havoc",
			fr: "Ravages",
			es: "Sembrar el Caos",
			it: "Scombussolare",
			pt: "Causar Estragos",
			de: "Chaos anrichten"
		},

		effect: {
			en: "Flip a coin until you get tails. For each heads, discard the top 2 cards of your opponent's deck.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, défaussez les 2 cartes du dessus du deck de votre adversaire.",
			es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta las 2 primeras cartas de la baraja de tu rival.",
			it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta le prime due carte del mazzo del tuo avversario.",
			pt: "Jogue 1 moeda até sair coroa. Para cada cara, descarte as 2 cartas de cima do baralho do seu oponente.",
			de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Lege pro Kopf die obersten 2 Karten vom Deck deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			en: "Wild Splash",
			fr: "Éclaboussure Sauvage",
			es: "Salpicadura Salvaje",
			it: "Furiasplash",
			pt: "Borrifada Selvagem",
			de: "Wilder Platscher"
		},

		effect: {
			en: "Discard the top 5 cards of your deck.",
			fr: "Défaussez les 5 cartes du dessus de votre deck.",
			es: "Descarta las 5 primeras cartas de tu baraja.",
			it: "Scarta le prime cinque carte del tuo mazzo.",
			pt: "Descarte as 5 cartas de cima do seu baralho.",
			de: "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 230
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	},

	thirdParty: {
		cardmarket: 664561
	}
}

export default card
