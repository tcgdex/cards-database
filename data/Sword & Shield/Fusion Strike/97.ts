import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [604],
	set: Set,

	name: {
		en: "Eelektross",
		fr: "Ohmassacre",
		es: "Eelektross",
		it: "Eelektross",
		pt: "Eelektross",
		de: "Zapplarang"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		en: "Eelektrik",
		fr: "Lampéroie",
		es: "Eelektrik",
		it: "Eelektrik",
		pt: "Eelektrik",
		de: "Zapplalek"
	},

	stage: "Stage2",
	retreat: 3,
	regulationMark: "E",
	illustrator: "OKACHEKE",

	description: {
		en: "They crawl out of the ocean using their arms. They will attack prey on shore and immediately drag it into the ocean."
	},

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Upper Shock"
		},

		damage: 40,

		effect: {
			en: "If this Pokémon evolved from Eelektrik during this turn, your opponent's Active Pokémon is now Paralyzed."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Wild Charge"
		},

		damage: 160,

		effect: {
			en: "This Pokémon also does 30 damage to itself."
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