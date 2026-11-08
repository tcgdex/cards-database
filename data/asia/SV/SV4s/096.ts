import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Durant"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'id-id': "Rahang besar Durant mampu melumatkan batu besar sekalipun. Bertarung secara berkelompok untuk melindungi telurnya dari Sandaconda."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Kemarahan Menggerombol"
		},

		effect: {
			'id-id': "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap Token Kerusakan yang dimiliki semua Durant di Arena sendiri."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Hard Scissor"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 20."
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