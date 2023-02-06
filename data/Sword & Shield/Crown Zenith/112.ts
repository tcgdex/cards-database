import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Chatot",
		fr: "Pijako",
		es: "Chatot",
		it: "Chatot",
		pt: "Chatot",
		de: "Plaudagei"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Cycle Draw",
			fr: "Pioche Cyclique",
			es: "Ciclorrobo",
			it: "Pesca Ciclica",
			pt: "Compra Cíclica",
			de: "Kreiszug"
		},

		effect: {
			en: "Discard a card from your hand. If you do, draw 2 cards.",
			fr: "Défaussez une carte de votre main. Dans ce cas, piochez 2 cartes.",
			es: "Descarta 1 carta de tu mano. Si lo haces, roba 2 cartas.",
			it: "Scarta una delle carte che hai in mano. Se lo fai, pesca due carte.",
			pt: "Descarte 1 carta da sua mão. Se fizer isto, compre 2 cartas.",
			de: "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 2 Karten."
		}
	}, {
		cost: ["Colorless"],

		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			it: "Alabattito",
			pt: "Asa",
			de: "Flattern"
		},

		damage: 10
	}],

	retreat: 0,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card