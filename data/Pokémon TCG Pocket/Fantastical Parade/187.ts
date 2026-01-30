import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Gigalith ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 190,
	types: ["Fighting"],

	evolveFrom: {
		en: "Boldore"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Megaton Cannon"
		},

		cost: ["Fighting", "Fighting", "Fighting", "Fighting"],

		effect: {
			en: "This attack does 140 damage to 1 of your opponent's Pokémon. During your next turn, this Pokémon can't attack."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4
}

export default card