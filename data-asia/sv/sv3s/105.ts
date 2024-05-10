import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Umbreon"
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		id: "Ketika tubuhnya terpapar gelombang bulan, pola cincin pada tubuh Umbreon bercahaya samar-samar, lalu kekuatan misterius akan bangkit."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Serangan Tipuan"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 50 kepada 1 Pokémon lawan. Kerusakan akibat serangan ini tidak terpengaruh oleh Kelemahan, Resistansi, dan efek yang sedang dialami Pokémon yang menerima kerusakan."
		},

		cost: ["Darkness"]
	}, {
		name: {
			id: "Pisau Hitam Kelam"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 140,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card