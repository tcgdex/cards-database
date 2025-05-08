import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Cottonee",
		fr: "Doudouvet"
	},

	illustrator: "Kanako Eo",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Attach",
			fr: "Accrochage"
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It shoots cotton from its body to protect itself. If it gets caught up in hurricane-strength winds, it can get sent to the other side of the Earth.",
		fr: "Il sème du coton pour se protéger. Il lui arrive d'être emporté par une tempête à l'autre bout du monde."
	}
}

export default card
