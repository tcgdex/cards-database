import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Blaziken ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [257],
	hp: 210,
	types: ["Fire"],

	evolveFrom: {
		en: "Combusken"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Mega Burning"
		},

		damage: 120,
		cost: ["Fire", "Fire"],

		effect: {
			en: "Discard Fire{R} Energy from this Pokémon. Your opponent's Active Pokémon is now Burned."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-blaziken"]
}

export default card