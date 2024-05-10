import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Revavroom ex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 280,
	types: ["Metal"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Tune Up"
		},

		effect: {
			id: "Pokémon ini dapat mengenakan paling banyak 4 lembar Pokémon Tool. (Saat Pokémon ini menjadi tidak memiliki Ability ini, pemain membuang ke Trash hingga Pokémon Tool tersisa 1 lembar.)"
		}
	}],

	attacks: [{
		name: {
			id: "Wild Drift"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
		},

		damage: 170,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card