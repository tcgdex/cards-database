import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Gabite"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	evolveFrom: {
		en: "Gible"
	},

	description: {
		en: "In rare cases, it molts and sheds its scales.<br />Medicine containing its scales as an ingredient<br />will make a weary body feel invigorated."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Slash"
		},

		damage: 60,
		cost: ["Water", "Fighting"]
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 1,
	
	boosters: [Palkia]
}

export default card