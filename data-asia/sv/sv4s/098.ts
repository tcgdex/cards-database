import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Doublade"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		id: "Doublade menggunakan strategi mengganti posisi menyerang dan bertahan kedua bilah pedang secara terus menerus untuk menghabisi mangsanya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Tarian Pedang"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, kerusakan akibat Slicing Blade Pokémon ini bertambah sejumlah 80."
		},

		cost: ["Metal"]
	}, {
		name: {
			id: "Slicing Blade"
		},

		damage: 40,
		cost: ["Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card