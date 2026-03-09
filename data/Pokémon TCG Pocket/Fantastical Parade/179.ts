import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Slakoth"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Star",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		en: "The way Slakoth lolls around makes anyone who\nwatches it feel like doing the same."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Yawn"
		},

		cost: ["Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card