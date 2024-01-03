import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Dodrio V",
		fr: "Dodrio V",
		es: "Dodrio V",
		it: "Dodrio V",
		pt: "Dodrio V",
		de: "Dodri V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",
	retreat: 1,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "No Reprieve"
		},

		damage: 20,

		effect: {
			en: "During your next turn, this Pokémon's attacks do 80 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Rampage Drill"
		},

		damage: 160,

		effect: {
			en: "This Pokémon also does 30 damage to itself."
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
