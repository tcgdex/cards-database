import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Torkoal"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		id: "Batu bara adalah sumber energi Pokémon ini. Terdapat banyak batu bara yang terpendam di gunung tempat tinggal Torkoal."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Serudukan Tempurung"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
		},

		damage: 30,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			id: "Pusaran Api"
		},

		effect: {
			id: "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 110,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card