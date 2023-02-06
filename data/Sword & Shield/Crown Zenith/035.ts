import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Luvdisc",
		fr: "Lovdisc",
		es: "Luvdisc",
		it: "Luvdisc",
		pt: "Luvdisc",
		de: "Liebiskus"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Emotional Draw",
			fr: "Pioche Émouvante",
			es: "Robo Emocional",
			it: "Pesca Sentimentale",
			pt: "Compra Emotiva",
			de: "Emotionaler Zug"
		},

		effect: {
			en: "Shuffle your hand into your deck. Then, draw 5 cards.",
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez 5 cartes.",
			es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 5 cartas.",
			it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca cinque carte.",
			pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre 5 cartas.",
			de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 5 Karten."
		}
	}, {
		cost: ["Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card