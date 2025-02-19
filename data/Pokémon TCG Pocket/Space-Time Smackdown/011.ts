import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Grotle"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		en: "Turtwig"
	},

	description: {
		en: "It lives along water in forests. In the daytime,<br />it leaves the forest to sunbathe its treed shell."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Razor Leaf"
		},

		damage: 60,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	
	boosters: [Palkia]
}

export default card