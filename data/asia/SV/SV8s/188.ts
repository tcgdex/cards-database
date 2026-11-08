import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Ceruledge"
	},

	illustrator: "Rond",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'id-id': "Wujud evolusi Charcadet menjadi Ceruledge oleh zirah kuno yang diselimuti dendam. Pokémon ini menebas musuhnya tanpa ampun."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Blaze Curse"
		},

		effect: {
			'id-id': "Buang semua Energi Spesial yang dikenakan pada semua Pokémon lawan ke Trash."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Sabetan Api Hitam"
		},

		effect: {
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 160,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card