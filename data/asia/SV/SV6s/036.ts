import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Litwick"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'id-id': "Litwick mengisap vitalitas sambil menyala sebagai penerangan dan berpura-pura memandu jalan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Memanggil Teman"
		},

		effect: {
			'id-id': "Pilih 1 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Fire"]
	}, {
		name: {
			'id-id': "Nyala Api"
		},

		damage: 20,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card