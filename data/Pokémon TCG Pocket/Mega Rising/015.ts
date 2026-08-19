import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Cottonee",
		fr: "Doudouvet"
	},

	illustrator: "Yuka Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [546],
	hp: 50,
	types: ["Grass"],

	description: {
		en: "It shoots cotton from its body to protect itself.\nIf it gets caught up in hurricane-strength winds,\nit can get sent to the other side of the Earth.",
		fr: "Il sème du coton pour se protéger.\\nIl lui arrive d'être emporté par une\\ntempête à l'autre bout du monde."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card