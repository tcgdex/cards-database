import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Luxray ex"
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Mata Bersinar Menusuk"
		},

		effect: {
			id: "Lihat Kartu Pegangan lawan, pilih 1 kartu di antaranya, lalu buang ke Trash."
		},

		damage: 120,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Bolt Strike"
		},

		effect: {
			id: "Buang semua Energi yang dikenakan pada Pokémon ini ke Trash."
		},

		damage: 250,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card