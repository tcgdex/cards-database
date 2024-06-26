import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Iron Leaves"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		id: "Menurut kesaksian yang sedikit, Pokémon ini dikabarkan memotong tipis pohon besar atau bebatuan besar dengan pedang berkilaunya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Recover Net"
		},

		effect: {
			id: "Pilih paling banyak 2 lembar Pokémon dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
		},

		cost: ["Grass"]
	}, {
		name: {
			id: "Avenge Edge"
		},

		effect: {
			id: "Jika pada giliran lawan sebelumnya, ada Pokémon sendiri yang KO karena kerusakan akibat serangan, kerusakan yang diberikan bertambah sejumlah 60."
		},

		damage: "100+",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card