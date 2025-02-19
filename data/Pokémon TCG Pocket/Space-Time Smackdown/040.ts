import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Palkia } from "./Boosters"

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
		en: "It used to have a shell on its back long ago.<br />This species is closely related to Pokémon<br />like Shellder."
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

	retreat: 2,
	
	boosters: [Palkia]
}

export default card