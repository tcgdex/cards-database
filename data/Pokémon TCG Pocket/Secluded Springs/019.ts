import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Jynx"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		en: "Its strange cries sound like human language.\nThere are some musicians who compose songs\nfor Jynx to sing."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Dazzle Dance"
		},

		damage: 40,
		cost: ["Water", "Water"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card