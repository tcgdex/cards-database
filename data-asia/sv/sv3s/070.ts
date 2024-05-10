import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Vespiquen ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Feromon Pemulih"
		},

		effect: {
			id: "Pulihkan HP 1 Pokémon sendiri sejumlah 60."
		},

		cost: ["Grass"]
	}, {
		name: {
			id: "Phantom Queen"
		},

		effect: {
			id: "Letakkan masing-masing sejumlah 3 Token Kerusakan pada semua Pokémon Cadangan lawan yang memiliki Token Kerusakan."
		},

		damage: 200,
		cost: ["Grass", "Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card