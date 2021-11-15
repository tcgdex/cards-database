import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Minun",
		fr: "Négapi",
		es: "Minun",
		it: "Minun",
		pt: "Minun",
		de: "Minun"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "HYOGONOSUKE",

	description: {
		en: "It cheers on friends. If its friends are losing, its body lets off more and more sparks."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Call for Family"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck."
		}
	}, {
		cost: ["Lightning"],

		name: {
			en: "Static Shock"
		},

		damage: 20
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card