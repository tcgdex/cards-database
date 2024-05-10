import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Dottler"
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		id: "Sedang menjalani pertumbuhan di dalam cangkang. Dottler menggunakan kekuatan psikokinesis untuk mendeteksi kondisi di luar cangkang dan bersiap untuk evolusi."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Proteksi"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		},

		cost: ["Grass"]
	}, {
		name: {
			id: "Sundulan Spiritual"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card