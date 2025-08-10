import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Dunsparce"
	},

	illustrator: "Kazuma Koda",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		en: "It creates mazes in dark locations. When spotted,\nit flees into the ground by digging with its tail."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sudden Flash"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card