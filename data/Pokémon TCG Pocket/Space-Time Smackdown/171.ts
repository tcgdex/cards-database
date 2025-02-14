import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Hippopotas"
	},

	illustrator: "Teeziro",
	rarity: "One Star",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "It shuts its nostrils tight, then travels through sand<br />as if walking. They form colonies of around 10."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rolling Tackle"
		},

		damage: 60,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
		
	boosters: [Palkia]
}

export default card