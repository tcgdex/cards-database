import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Jynx"
	},

	illustrator: "Gapao",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'id-id': "Pada suatu kawasan di Galar, Jynx dikenal sebagai Ratu Es serta disembah dan ditakuti."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Ciuman Mengundang"
		},

		effect: {
			'id-id': "Pilih 1 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck. Setelah itu, pilih 1 Energi yang dikenakan pada Pokémon ini, lalu pindahkan ke Pokémon yang baru dimasukkan."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Snow Ice"
		},

		damage: 30,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card