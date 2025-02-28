import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Heracross"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		en: "It loves sweet nectar. To keep all the nectar to<br />itself, it hurls rivals away with its prized horn."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Single-Horn Throw"
		},

		damage: 50,
		cost: ["Grass", "Colorless", "Colorless"],

		effect: {
			en: "Flip 2 coins. If both of them are heads, this attack does 70 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card