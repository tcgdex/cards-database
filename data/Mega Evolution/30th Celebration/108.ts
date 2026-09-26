import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It has a sturdy body made up of stacked coins. Gholdengo overwhelms its enemies by firing coin after coin at them in quick succession."
	},

	name: {
		en: "Gholdengo",
		fr: "Gromago",
		de: "Monetigo",
		es: "Gholdengo",
		it: "Gholdengo",
		'es-mx': "Gholdengo",
		pt: "Gholdengo"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	dexId: [1000],
	hp: 130,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Celebration",
			fr: "Fête Célébratoire",
			de: "Zelebrieren",
			es: "Celebrar",
			it: "Festeggiamenti",
			'es-mx': "Celebrar",
			pt: "Celebrar"
		},

		effect: {
			en: "If you have exactly 30 cards in your hand, take 2 Prize cards. If you do, shuffle your hand into your deck.",
			fr: "Si vous avez exactement 30 cartes dans votre main, récupérez 2 cartes Récompense. Dans ce cas, mélangez votre main avec votre deck.",
			de: "Wenn du genau 30 Karten auf deiner Hand hast, nimm 2 Preiskarten. Wenn du das machst, mische deine Handkarten in dein Deck.",
			es: "Si tienes exactamente 30 cartas en tu mano, coge 2 cartas de Premio. Si lo haces, pon las cartas de tu mano en tu baraja y barájalas todas.",
			it: "Se hai esattamente 30 carte in mano, prendi due carte Premio. Se lo fai, rimischia le carte che hai in mano nel tuo mazzo.",
			'es-mx': "Si tienes exactamente 30 cartas en tu mano, toma 2 cartas de Premio. Si lo haces, baraja tu mano en tu mazo.",
			pt: "Se você tiver exatamente 30 cartas na sua mão, pegue 2 cartas de Prêmio. Se fizer isso, embaralhe a sua mão no seu baralho."
		},

		cost: ["Metal"]
	}, {
		name: {
			en: "Triple Smash",
			fr: "Triple Éclate",
			de: "Dreifachschmetterer",
			es: "Golpe Triple",
			it: "Tripla Schiacciata",
			'es-mx': "Triple Golpazo",
			pt: "Pancada Tripla 50×"
		},

		effect: {
			en: "Flip 3 coins. This attack does 50 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu.",
			es: "Lanza 3 monedas. Este ataque hace 50 puntos de daño por cada cara.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
			'es-mx': "Lanza 3 monedas. Este ataque hace 50 puntos de daño por cada cara.",
			pt: "Jogue 3 moedas. Este ataque causa 50 pontos de dano para cada cara."
		},

		damage: "50×",
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907715,
				tcgplayer: 716501
			}
		}
	],
}

export default card
