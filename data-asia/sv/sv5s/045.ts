import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Palafin"
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		id: "Gen zaman purba Pokémon ini telah bangkit. Palafin memiliki tenaga super yang membuatnya dapat mengangkat kapal pesiar menggunakan satu siripnya dengan mudah."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Vanguard Punch"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		},

		damage: 130,
		cost: ["Water"]
	}, {
		name: {
			id: "Serangan Ganda"
		},

		effect: {
			id: "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 90 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "90×",
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card