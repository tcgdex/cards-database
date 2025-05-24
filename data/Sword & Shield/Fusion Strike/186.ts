import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [707],
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
	retreat: 1,
	regulationMark: "E",
	illustrator: "MAHOU",

	description: {
		en: "Long ago it lived in mines, but once the minerals that make up its diet became scarcer, Klefki began appearing in human settlements."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Unlock",
			fr: "Déverrouillage",
			de: "Aufschließen",
			es: "Abrir el Cerrojo",
			pt: "Destrancar",
			it: "Apertura"
		},

		damage: 10,

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			de: "Ziehe 2 Karten.",
			es: "Roba 2 cartas.",
			pt: "Compre 2 cartas.",
			it: "Pesca due carte."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card