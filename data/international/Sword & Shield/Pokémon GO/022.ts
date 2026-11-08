import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [130],
	set: Set,

	name: {
		'en-us': "Gyarados",
		'fr-fr': "Léviator",
		'es-es': "Gyarados",
		'it-it': "Gyarados",
		'pt-br': "Gyarados",
		'de-de': "Garados"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
		'es-es': "Magikarp",
		'it-it': "Magikarp",
		'pt-br': "Magikarp",
		'de-de': "Karpador"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Wreak Havoc",
			'fr-fr': "Ravages",
			'es-es': "Sembrar el Caos",
			'it-it': "Scombussolare",
			'pt-br': "Causar Estragos",
			'de-de': "Chaos anrichten"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. For each heads, discard the top 2 cards of your opponent's deck.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, défaussez les 2 cartes du dessus du deck de votre adversaire.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta las 2 primeras cartas de la baraja de tu rival.",
			'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta le prime due carte del mazzo del tuo avversario.",
			'pt-br': "Jogue 1 moeda até sair coroa. Para cada cara, descarte as 2 cartas de cima do baralho do seu oponente.",
			'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Lege pro Kopf die obersten 2 Karten vom Deck deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Wild Splash",
			'fr-fr': "Éclaboussure Sauvage",
			'es-es': "Salpicadura Salvaje",
			'it-it': "Furiasplash",
			'pt-br': "Borrifada Selvagem",
			'de-de': "Wilder Platscher"
		},

		effect: {
			'en-us': "Discard the top 5 cards of your deck.",
			'fr-fr': "Défaussez les 5 cartes du dessus de votre deck.",
			'es-es': "Descarta las 5 primeras cartas de tu baraja.",
			'it-it': "Scarta le prime cinque carte del tuo mazzo.",
			'pt-br': "Descarte as 5 cartas de cima do seu baralho.",
			'de-de': "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 230
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "It has an extremely aggressive nature. The Hyper Beam it shoots from its mouth totally incinerates all targets.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665253,
				tcgplayer: 276955
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665253,
				tcgplayer: 276955
			}
		},
	],
}

export default card
