import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Cleffa"
	},

	illustrator: "Orca",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		en: "According to local rumors, Cleffa are often seen\nin places where shooting stars have fallen."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Twinkly Call"
		},

		effect: {
			en: "Put a random Pokémon from your deck into your hand."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0
}

export default card