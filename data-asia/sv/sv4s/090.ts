import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Garbodor"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		id: "Cairan beracun yang dikeluarkan dari lengan kanan Garbodor sangat berbahaya, sehingga makhluk hidup yang sedang lemah akan mati seketika jika bermandikan cairan tersebut."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Lempar Buang"
		},

		effect: {
			id: "Buang sesukanya Pokémon Tool dari Kartu Pegangan sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 50 untuk tiap lembarnya."
		},

		damage: "50×",
		cost: ["Darkness"]
	}, {
		name: {
			id: "Venom Hit"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		},

		damage: 80,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card