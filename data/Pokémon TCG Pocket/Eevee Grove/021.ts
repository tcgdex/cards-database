import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Alomomola"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		en: "It gently holds injured and weak Pokémon in its\nfins. Its special membrane heals their wounds."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Water Pulse"
		},

		damage: 50,
		cost: ["Water", "Colorless", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card