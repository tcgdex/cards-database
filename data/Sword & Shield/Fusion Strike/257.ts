import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Greedent V",
		fr: "Rongrigou V",
		es: "Greedent V",
		it: "Greedent V",
		pt: "Greedent V",
		de: "Schlaraffel V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Saya Tsuruta",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Body Slam"
		},

		damage: 40,

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Nom-Nom-Nom Incisors"
		},

		damage: 120,

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