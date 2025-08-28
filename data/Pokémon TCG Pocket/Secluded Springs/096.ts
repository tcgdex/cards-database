import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Kingler"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Krabby"
	},

	description: {
		en: "Its large and hard pincer has 10,000-horsepower\nstrength. However, being so big, it is unwieldy\nto move."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "KO Crab"
		},

		damage: 80,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "Flip 2 coins. If both of them are heads, this attack does 80 more damage."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card