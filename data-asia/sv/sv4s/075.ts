import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Clobbopus"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		id: "Clobbopus memiliki kecerdasan setingkat anak berusia tiga tahun. Tentakelnya sering putus tercabik, tapi Pokémon ini tidak peduli, karena tentakelnya akan tumbuh kembali."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Feint"
		},

		effect: {
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh Resistansi."
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card