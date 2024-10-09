import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Seaking"
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		id: "Saat musim gugur, tubuh Seaking makin berlemak dan warnanya berubah menjadi sangat indah karena Pokémon ini bersiap untuk melamar pasangannya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Mematuk Jatuh"
		},

		effect: {
			id: "Sebelum memberikan kerusakan, buang Pokémon Tool yang dikenakan pada Pokémon Bertarung lawan ke Trash."
		},

		damage: 50,
		cost: ["Water"]
	}, {
		name: {
			id: "Bor Tanduk"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card