import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Simisage"
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		id: "Simisage memiliki temperamen tinggi dan bertarung dengan mengayunkan ekor berdurinya. Daun di kepalanya sangat pahit."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Monkey Trio"
		},

		effect: {
			id: "Jika ada Simisage, Simisear, dan Simipour di Arena sendiri, Pokémon ini menjadi tidak membutuhkan Energi {Bening} untuk menggunakan serangan."
		}
	}],

	attacks: [{
		name: {
			id: "Jarum Sodokan Tangan"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon yang memiliki Ability (selain Simisage)."
		},

		damage: 100,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card