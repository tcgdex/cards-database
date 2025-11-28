import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Corphish",
		fr: "Écrapince"
	},

	illustrator: "chibi",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [341],
	hp: 60,
	types: ["Water"],

	description: {
		en: "No matter how dirty the water in the river, it will\nadapt and thrive. It has a strong will to survive.",
		fr: "Sa nature robuste lui permet de prospérer dans n'importe quelles eaux, aussi polluées soient-elles."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Vise Grip",
			fr: "Force Poigne"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card