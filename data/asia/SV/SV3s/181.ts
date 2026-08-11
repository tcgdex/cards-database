import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Gimmighoul"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		id: "Sekitar 1500 tahun lalu, Gimmighoul terlahir di dalam kotak harta. Pokémon ini mengisap vitalitas orang jahat yang hendak mencuri hartanya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Lempar Koin Beruntun"
		},

		effect: {
			id: "Lempar koin hingga hasilnya sisi belakang. Serangan ini memberikan kerusakan sejumlah 20 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "20×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card