import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Gengar"
	},

	illustrator: "Midori Harada",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		en: "Haunter"
	},

	description: {
		en: "To steal the life of its target, it slips into<br />the prey's shadow and silently waits for<br />an opportunity."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Hypnoblast"
		},

		damage: 70,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card