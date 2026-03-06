import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Vivillon"
	},

	illustrator: "miki kudo",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Spewpa"
	},

	description: {
		en: "This Pokémon was born in a land where flowers\nbloom. It scatters colorful, toxic scales from its\nwings during battle."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Vivid Powder"
		},

		damage: 60,
		cost: ["Grass", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned and Asleep."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card