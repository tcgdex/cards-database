import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Numel"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		id: "Magma bersuhu 1200 ℃ membara di dalam tubuh Numel. Pergerakan Pokémon ini menjadi lamban karena magma tersebut mengeras ketika suhu udara menjadi dingin."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menghanguskan"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		},

		cost: ["Fire"]
	}, {
		name: {
			id: "Heat Blast"
		},

		damage: 60,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card