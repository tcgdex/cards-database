import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Incineroar ex"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Hustle Play"
		},

		effect: {
			id: "Energi {Bening} yang dibutuhkan oleh Pokémon ini untuk menggunakan serangan berkurang untuk tiap Pokémon Cadangan lawan."
		}
	}],

	attacks: [{
		name: {
			id: "Blaze Bomb"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		},

		damage: 240,
		cost: ["Fire", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card