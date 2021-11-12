import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
		es: "Wigglytuff",
		it: "Wigglytuff",
		pt: "Wigglytuff",
		de: "Knuddeluff"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou",
		es: "Jigglypuff",
		it: "Jigglypuff",
		pt: "Jigglypuff",
		de: "Pummeluff"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Asako Ito",

	description: {
		en: "When it gets angry, it inhales with all its might, and its body gradually inflates. Sometimes they can grow 20 times larger!"
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Find Treasure"
		},

		effect: {
			en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Hyper Voice"
		},

		damage: 90
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card