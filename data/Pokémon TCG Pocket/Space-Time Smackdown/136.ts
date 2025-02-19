import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Bibarel"
	},

	illustrator: "kirisAki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		en: "Bidoof"
	},

	description: {
		en: "It busily makes its nest with stacks of branches and<br />roots it has cut up with its sharp incisors."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Rolling Tackle"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	
	boosters: [Dialga]
}

export default card