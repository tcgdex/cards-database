import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Slurpuff"
	},

	illustrator: "mingo",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		id: "Slurpuff membaui bau badan untuk mengetahui kondisi fisik dan mental. Diharapkan kemampuan ini dapat diaplikasikan di bidang medis."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Jilat-jilat"
		},

		effect: {
			id: "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 90 untuk tiap lemparan dengan hasil sisi depan. Jika semuanya sisi belakang, ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		damage: "90×",
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card