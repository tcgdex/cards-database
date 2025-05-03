import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Lapras"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		en: "A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Surf"
		},

		damage: 70,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card