import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Klefki",
		fr: "Trousselin",
		es: "Klefki",
		it: "Klefki",
		pt: "Klefki",
		de: "Clavion"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Stick 'n' Draw",
			fr: "Inséré-Pioché",
			es: "Abrir y Robar",
			it: "Metti e Pesca",
			pt: "Virada de Chave",
			de: "Abwerfen und Ziehen"
		},

		effect: {
			en: "Discard a card from your hand. If you do, draw 2 cards.",
			fr: "Défaussez une carte de votre main. Dans ce cas, piochez 2 cartes.",
			es: "Descarta 1 carta de tu mano. Si lo haces, roba 2 cartas.",
			it: "Scarta una delle carte che hai in mano. Se lo fai, pesca due carte.",
			pt: "Descarte uma carta da sua mão. Se fizer isto, compre 2 cartas.",
			de: "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 2 Karten."
		}
	}, {
		cost: ["Colorless"],

		name: {
			en: "Hook",
			fr: "Crochet",
			es: "Garfio",
			it: "Uncino",
			pt: "Gancho",
			de: "Haken"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card