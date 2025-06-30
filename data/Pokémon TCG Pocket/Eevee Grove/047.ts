import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Mawile"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		en: "It uses its docile-looking face to lull foes into\ncomplacency, then bites with its huge,\nrelentless jaws."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Powerful Vise"
		},

		damage: 30,
		cost: ["Metal", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card