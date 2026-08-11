import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Pansage"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'id-id': "Pansage ahli mencari buah beri dan memiliki kelemahlembutan untuk berbagi buah beri yang dikumpulkan dari segala penjuru dengan teman-temannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Memanggil Teman"
		},

		effect: {
			'id-id': "Pilih 1 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Bibit Parasit"
		},

		effect: {
			'id-id': "Pulihkan HP Pokémon ini sejumlah 10."
		},

		damage: 30,
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