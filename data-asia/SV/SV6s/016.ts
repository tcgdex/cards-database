import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Rillaboom"
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	description: {
		id: "Rillaboom mengontrol kekuatan tunggul pohon spesial dengan menabuhnya bagai drum. Pokémon ini bertarung dengan mengendalikan akar tumbuhan."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			id: "Drum Beating"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, Energi yang dibutuhkan oleh Pokémon yang menerima serangan ini untuk menggunakan serangan dan Mundur masing-masing bertambah 1 Energi {Bening}."
		},

		damage: 60,
		cost: ["Grass"]
	}, {
		name: {
			id: "Wood Hammer"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 50."
		},

		damage: 180,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card