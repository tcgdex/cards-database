import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [659],
	set: Set,

	name: {
		en: "Bunnelby",
		fr: "Sapereau",
		es: "Bunnelby",
		it: "Bunnelby",
		pt: "Bunnelby",
		de: "Scoppel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Misa Tsutsui",

	description: {
		en: "It's very sensitive to danger. The sound of Corviknight's flapping will have Bunnelby digging a hole to hide underground in moments."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Find a Friend"
		},

		effect: {
			en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Take Down"
		},

		damage: 30,

		effect: {
			en: "This Pokémon also does 10 damage to itself."
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