import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Altaria ex"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 260,
	types: ["Dragon"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Humming Heal"
		},

		effect: {
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri. Pulihkan HP semua Pokémon sendiri masing-masing sejumlah 20."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Aura Cahaya"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, Pokémon ini tidak menerima efek akibat serangan yang digunakan oleh Pokémon lawan."
		},

		damage: 140,
		cost: ["Water", "Metal"]
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card