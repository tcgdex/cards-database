import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [301],
	set: Set,

	name: {
		en: "Delcatty",
		fr: "Delcatty",
		es: "Delcatty",
		it: "Delcatty",
		pt: "Delcatty",
		de: "Enekoro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		en: "Skitty",
		fr: "Skitty",
		es: "Skitty",
		it: "Skitty",
		pt: "Skitty",
		de: "Eneco"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "kirisAki",

	description: {
		en: "It is highly popular among female Trainers for its sublime fur. It does not keep a nest."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Willful Busybody",
			fr: "Fouineur Obstiné",
			de: "Eigensinniges Einmischen",
			es: "Cotilla Obstinado",
			pt: "Insistente e Intrometido",
			it: "Corpimpegnato Testardo"
		},

		effect: {
			en: "Your opponent reveals their hand. Choose a card you find there and put it on the bottom of their deck.",
			fr: "Votre adversaire dévoile sa main. Choisissez-y une carte, puis placez-la en dessous de son deck.",
			de: "Dein Gegner zeigt dir seine Handkarten. Wähle 1 Karte, die du dort findest, und lege sie unter sein Deck.",
			es: "Tu rival enseña las cartas de su mano. Elige 1 carta que encuentres entre ellas y ponla en la parte inferior de su baraja.",
			pt: "Seu oponente revela a própria mão. Escolha 1 carta que encontrar lá e coloque-a como a carta de baixo do baralho dele(a).",
			it: "Il tuo avversario mostra le carte che ha in mano. Scegline una e mettila in fondo al suo mazzo."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Double Slap",
			fr: "Torgnoles",
			de: "Duplexhieb",
			es: "Doble Bofetón",
			pt: "Tapa Duplo",
			it: "Doppiasberla"
		},

		damage: "50×",

		effect: {
			en: "Flip 2 coins. This attack does 50 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu.",
			es: "Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.",
			pt: "Jogue 2 moedas. Este ataque causa 50 pontos de dano para cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582947,
		tcgplayer: 253307
	}
}

export default card