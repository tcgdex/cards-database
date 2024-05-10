import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Altaria ex"
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 260,
	types: ["Dragon"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Humming Heal"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pulihkan HP semua Pokémon sendiri masing-masing sejumlah 20."
		}
	}],

	attacks: [{
		name: {
			id: "Aura Cahaya"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, Pokémon ini tidak menerima efek akibat serangan yang digunakan oleh Pokémon lawan."
		},

		damage: 140,
		cost: ["Water", "Metal"]
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card