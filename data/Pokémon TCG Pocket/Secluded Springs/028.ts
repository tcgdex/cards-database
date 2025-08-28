import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Eelektross"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	evolveFrom: {
		en: "Eelektrik"
	},

	description: {
		en: "They crawl out of the ocean using their arms.\nThey will attack prey on shore and immediately\ndrag it into the ocean."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Wild Charge"
		},

		damage: 120,
		cost: ["Lightning", "Lightning", "Colorless"],

		effect: {
			en: "This Pokémon also does 20 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card