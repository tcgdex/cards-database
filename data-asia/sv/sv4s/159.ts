import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Golisopod ex"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 270,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Aqua Blade"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Satu Tebasan Menjauh"
		},

		effect: {
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash. Setelah itu, tukar Pokémon ini dengan Pokémon Cadangan."
		},

		damage: 170,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card