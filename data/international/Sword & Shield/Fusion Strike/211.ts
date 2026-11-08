import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [301],
	set: Set,

	name: {
		'en-us': "Delcatty",
		'fr-fr': "Delcatty",
		'es-es': "Delcatty",
		'it-it': "Delcatty",
		'pt-br': "Delcatty",
		'de-de': "Enekoro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Skitty",
		'fr-fr': "Skitty",
		'es-es': "Skitty",
		'it-it': "Skitty",
		'pt-br': "Skitty",
		'de-de': "Eneco"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "kirisAki",

	description: {
		'en-us': "It is highly popular among female Trainers for its sublime fur. It does not keep a nest."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Willful Busybody",
			'fr-fr': "Fouineur Obstiné",
			'de-de': "Eigensinniges Einmischen",
			'es-es': "Cotilla Obstinado",
			'pt-br': "Insistente e Intrometido",
			'it-it': "Corpimpegnato Testardo"
		},

		effect: {
			'en-us': "Your opponent reveals their hand. Choose a card you find there and put it on the bottom of their deck.",
			'fr-fr': "Votre adversaire dévoile sa main. Choisissez-y une carte, puis placez-la en dessous de son deck.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten. Wähle 1 Karte, die du dort findest, und lege sie unter sein Deck.",
			'es-es': "Tu rival enseña las cartas de su mano. Elige 1 carta que encuentres entre ellas y ponla en la parte inferior de su baraja.",
			'pt-br': "Seu oponente revela a própria mão. Escolha 1 carta que encontrar lá e coloque-a como a carta de baixo do baralho dele(a).",
			'it-it': "Il tuo avversario mostra le carte che ha in mano. Scegline una e mettila in fondo al suo mazzo."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Double Slap",
			'fr-fr': "Torgnoles",
			'de-de': "Duplexhieb",
			'es-es': "Doble Bofetón",
			'pt-br': "Tapa Duplo",
			'it-it': "Doppiasberla"
		},

		damage: "50×",

		effect: {
			'en-us': "Flip 2 coins. This attack does 50 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu.",
			'es-es': "Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 50 pontos de dano para cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582947,
				tcgplayer: 253307
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582947,
				tcgplayer: 253307
			}
		},
	],
}

export default card
