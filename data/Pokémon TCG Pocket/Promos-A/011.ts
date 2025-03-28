import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Chansey"
	},

	illustrator: "sowsow",
	rarity: "None",
	category: "Pokemon",
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Gentle Slap"
		},

		cost: ["Colorless", "Colorless", "Colorless"],
		damage: 60
	}],

	hp: 120,

	description: {
		en: "This kindly Pokémon lays highly nutritious eggs and shares them with injured Pokémon or people."
	},

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card
