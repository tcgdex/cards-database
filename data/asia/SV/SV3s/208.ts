import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Bombirdier ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'id-id': "Fast Carry"
		},

		effect: {
			'id-id': "Serangan ini juga dapat digunakan pada giliran pertama Pemain Pertama. Pilih paling banyak 3 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Shadow Wind"
		},

		effect: {
			'id-id': "Pemain dapat mengembalikan Pokémon ini dan semua kartu yang dikenakannya ke Kartu Pegangan."
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card