import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Eelektross"
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Thunder Fang"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		},

		damage: "80"
	}],

	retreat: 3,
	rarity: "Three Diamond",

	evolveFrom: {
		en: "Eelektrik",
		fr: "Lampéroie",
		es: "Eelektrik",
		it: "Eelektrik",
		pt: "Eelektrik",
		de: "Zapplalek"
	}
}

export default card
