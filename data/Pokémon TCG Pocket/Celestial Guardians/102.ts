import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Mudbray"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "This Pokémon covers itself in mud that it has regurgitated. The mud won't dry out even if it's exposed to the sun for a long time."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rear Kick"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card