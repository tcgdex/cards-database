import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Incineroar ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],

	evolveFrom: {
		en: "Torracat"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Fire Fang"
		},

		damage: 30,
		cost: ["Fire"],

		effect: {
			en: "Your opponent's Active Pokémon is now Burned."
		}
	}, {
		name: {
			en: "Scar-Charged Smash"
		},

		damage: 80,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "If this Pokémon has damage on it, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card