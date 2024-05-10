import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Durant"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		id: "Rahang besar Durant mampu melumatkan batu besar sekalipun. Bertarung secara berkelompok untuk melindungi telurnya dari Sandaconda."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Kemarahan Menggerombol"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap Token Kerusakan yang dimiliki semua Durant di Arena sendiri."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Hard Scissor"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 20."
		},

		damage: 80,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card