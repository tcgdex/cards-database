import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Cinderace"
	},

	illustrator: "Kouki Saitou",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Raboot"
	},

	description: {
		en: "Using a ball that it made out of flames,\nCinderace blinds its opponents and\nkeeps them at bay."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Fireball Shot"
		},

		damage: 120,
		cost: ["Fire", "Fire"],

		effect: {
			en: "During your next turn, this Pokémon can't attack."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 0
}

export default card