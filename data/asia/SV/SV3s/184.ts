import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Minior"
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		id: "Wujud Minior ketika cangkang luarnya lepas. Warna intinya berbeda tergantung dari unsur pada makanannya."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Meteor Memelesat"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri tiap kali pemain mengenakan Energi dari Kartu Pegangan sendiri pada Pokémon ini jika Pokémon ini ada di Cadangan. Tukar Pokémon ini dengan Pokémon Bertarung."
		}
	}],

	attacks: [{
		name: {
			id: "Serudukan Gravitasi"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap Energi yang dibutuhkan oleh Pokémon Bertarung lawan untuk Mundur."
		},

		damage: "20×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card