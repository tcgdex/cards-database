import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [124],
	set: Set,

	name: {
		en: "Jynx",
		fr: "Lippoutou",
		es: "Jynx",
		it: "Jynx",
		pt: "Jynx",
		de: "Rossana"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Shigenori Negishi",

	description: {
		en: "Its strange cries sound like human language. There are some musicians who compose songs for Jynx to sing."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Double Draw"
		},

		effect: {
			en: "Draw 2 cards."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Dazzle Dance"
		},

		damage: 30,

		effect: {
			en: "Your opponent's Active Pokémon is now Confused."
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