import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

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
	retreat: 1,
	regulationMark: "E",
	illustrator: "MAHOU",

	description: {
		en: "Long ago it lived in mines, but once the minerals that make up its diet became scarcer, Klefki began appearing in human settlements."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Unlock"
		},

		damage: 10,

		effect: {
			en: "Draw 2 cards."
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