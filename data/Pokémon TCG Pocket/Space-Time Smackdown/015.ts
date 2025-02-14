import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga, Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Burmy"
	},

	illustrator: "Mugi Hamada",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "To shelter itself from cold, wintry winds, it covers<br />itself with a cloak made of twigs and leaves."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	
	boosters: [Dialga, Palkia]
}

export default card