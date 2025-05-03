import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Heatmor"
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Combustion"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "There's a hole in its tail that allows it to draw in the air it needs to keep its fire burning. If the hole gets blocked, this Pokémon will fall ill.",
	}
}

export default card
