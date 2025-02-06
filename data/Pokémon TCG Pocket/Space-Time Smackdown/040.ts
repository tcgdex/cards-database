import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Shellos"
	},

	illustrator: "Teeziro",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		en: "It used to have a shell on its back long ago. This species is closely related to Pokémon like Shellder."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Mud-Slap"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card
