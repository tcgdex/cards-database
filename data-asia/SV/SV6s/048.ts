import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Crawdaunt"
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		id: "Pokémon pengamuk yang mengayun-ayunkan capit raksasanya. Konon ia merupakan Pokémon yang sulit sekali dipelihara."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Gunting Gunting"
		},

		effect: {
			id: "Lempar koin 2 kali. Buang kartu dari atas Deck lawan ke Trash untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			id: "Palu Mengamuk"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 180,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card