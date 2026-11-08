import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Palafin ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 340,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'id-id': "‌[Ability] Jiwa Perkasa"
		},

		effect: {
			'id-id': "Kartu ini hanya dapat dimasukkan ke Arena menggunakan efek dari Ability Menjadi Perkasa Palafin."
		}
	}, {
		name: {
			'id-id': "Giga Impact"
		},

		effect: {
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 250,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card