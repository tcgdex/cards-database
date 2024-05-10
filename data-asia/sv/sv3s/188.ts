import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Ferrothorn"
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		id: "Ferrothorn memiliki duri yang lebih keras dari baja. Pokémon ini bergerak merayapi dinding batu dengan menusukkan duri di tentakelnya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Tubuh Keras"
		},

		effect: {
			id: "Kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
		}
	}],

	attacks: [{
		name: {
			id: "Spinning Needle"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, kerusakan akibat Spinning Needle Pokémon ini bertambah sejumlah 100."
		},

		damage: 50,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card