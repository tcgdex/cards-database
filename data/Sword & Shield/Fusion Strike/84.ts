import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [872],
	set: Set,

	name: {
		en: "Snom",
		fr: "Frissonille",
		es: "Snom",
		it: "Snom",
		pt: "Snom",
		de: "Snomnom"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Water"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Yuka Morii",

	description: {
		en: "It eats snow that piles up on the ground. The more snow it eats, the bigger and more impressive the spikes on its back grow."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Find Ice"
		},

		effect: {
			en: "Search your deck for up to 2 Water Energy cards, reveal them, and put them into your hand. Then, shuffle your deck."
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