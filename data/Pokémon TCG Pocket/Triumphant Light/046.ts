import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Gabite"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	evolveFrom: {
		en: "Gible"
	},

	description: {
		en: "In rare cases, it molts and sheds its scales.<br />Medicine containing its scales as an ingredient<br />will make a weary body feel invigorated."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Sharp Scythe"
		},

		damage: 30,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card