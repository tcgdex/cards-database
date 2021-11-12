import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Gligar",
		fr: "Scorplane",
		es: "Gligar",
		it: "Gligar",
		pt: "Gligar",
		de: "Skorgla"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Misa Tsutsui",

	description: {
		en: "It flies straight at its target's face, then clamps down on the startled victim to inject poison."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Poison Sting"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Pierce"
		},

		damage: 30
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card