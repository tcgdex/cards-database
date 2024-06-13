import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		en: "Growlithe",
		fr: "Caninos",
		es: "Growlithe",
		it: "Growlithe",
		pt: "Growlithe",
		de: "Fukano"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Narumi Sato",

	description: {
		en: "Extremely loyal, it will fearlessly bark at any opponent to protect its own Trainer from harm."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Warm Up"
		},

		effect: {
			en: "Search your deck for a Fire Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Combustion"
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