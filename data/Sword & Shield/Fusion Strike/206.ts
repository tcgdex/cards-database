import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [143],
	set: Set,

	name: {
		en: "Snorlax",
		fr: "Ronflex",
		es: "Snorlax",
		it: "Snorlax",
		pt: "Snorlax",
		de: "Relaxo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Oswaldo KATO",

	description: {
		en: "This Pokémon's stomach is so strong, even eating moldy or rotten food will not affect it."
	},

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Heavy Impact"
		},

		damage: 80
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card