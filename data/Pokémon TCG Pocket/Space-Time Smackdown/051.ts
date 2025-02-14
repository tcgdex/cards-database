import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga, Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Magnemite"
	},

	illustrator: "MAHOU",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "The electromagnetic waves emitted by the units<br />at the sides of its head expel antigravity, which<br />allows it to float."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ram"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	
	boosters: [Dialga, Palkia]
}

export default card