import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Dragonite ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 180,
	types: ["Dragon"],

	evolveFrom: {
		en: "Dragonair"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Giga Impact"
		},

		damage: 180,
		cost: ["Water", "Lightning", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon can't attack."
		}
	}],

	retreat: 2
}

export default card