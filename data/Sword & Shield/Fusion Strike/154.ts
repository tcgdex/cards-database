import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Falinks",
		fr: "Hexadron",
		es: "Falinks",
		it: "Falinks",
		pt: "Falinks",
		de: "Legios"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Akira Komayama",

	description: {
		en: "The six of them work together as one Pokémon. Teamwork is also their battle strategy, and they constantly change their formation as they fight."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Headbutt"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Cliff Edge Formation"
		},

		damage: "60+",

		effect: {
			en: "If your opponent has exactly 1 Prize card remaining, this attack does 160 more damage."
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