import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Greedent VMAX",
		fr: "Rongrigou VMAX",
		es: "Greedent VMAX",
		it: "Greedent VMAX",
		pt: "Greedent VMAX",
		de: "Schlaraffel VMAX"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Colorless"],

	evolveFrom: {
		en: "Greedent V",
		fr: "Rongrigou-V",
		es: "Greedent V",
		it: "Greedent-V",
		pt: "Greedent V",
		de: "Schlaraffel-V"
	},

	stage: "VMAX",
	retreat: 3,
	regulationMark: "E",
	illustrator: "PLANETA Mochizuki",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Turn a Profit"
		},

		damage: 30,

		effect: {
			en: "If your opponent's Basic Pokémon is Knocked Out by damage from this attack, take 2 more Prize cards."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Max Gimme Gimme"
		},

		damage: 160,

		effect: {
			en: "Draw 3 cards."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card