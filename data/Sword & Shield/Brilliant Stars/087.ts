import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [461],
	set: Set,

	name: {
		en: "Weavile",
		fr: "Dimoret",
		es: "Weavile",
		it: "Weavile",
		pt: "Weavile",
		de: "Snibunna"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
		es: "Sneasel",
		it: "Sneasel",
		pt: "Sneasel",
		de: "Sniebel"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Ransack",
			fr: "Rapine",
			es: "Pillaje",
			it: "Saccheggiamento",
			pt: "Saquear",
			de: "Durchwühlen"
		},

		effect: {
			en: "Flip 2 coins. If either of them is heads, your opponent reveals their hand. For each heads, choose a card you find there and put it on the bottom of your opponent's deck in any order.",
			fr: "Lancez 2 pièces. Si vous obtenez au moins un côté face, votre adversaire dévoile sa main. Pour chaque côté face, choisissez-y une carte, puis placez-la en dessous du deck de votre adversaire dans l'ordre de votre choix.",
			es: "Lanza 2 monedas. Si sale cara en alguna de ellas, tu rival enseña las cartas de su mano. Por cada cara, elige 1 carta que encuentres entre ellas y ponla en la parte inferior de la baraja de tu rival en el orden que quieras.",
			it: "Lancia due volte una moneta. Se esce almeno una volta testa, il tuo avversario mostra le carte che ha in mano. Ogni volta che esce testa, scegline una e mettila in fondo al mazzo del tuo avversario nell'ordine che preferisci.",
			pt: "Jogue 2 moedas. Se qualquer uma delas sair cara, seu oponente revelará a própria mão. Para cada cara, escolha 1 carta que encontrar lá e coloque-a como a carta de baixo do baralho do seu oponente em qualquer ordem.",
			de: "Wirf 2 Münzen. Wenn eine oder beide Münzen Kopf zeigen, zeigt dir dein Gegner seine Handkarten. Wähle pro Kopf 1 Karte, die du dort findest, und lege sie in beliebiger Reihenfolge unter das Deck deines Gegners."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			it: "Lacerazione",
			pt: "Talho",
			de: "Schlitzer"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608537,
		tcgplayer: 263803
	}
}

export default card