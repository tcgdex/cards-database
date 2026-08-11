import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Infernape"
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'id-id': "Pokémon yang memiliki sifat kasar bagaikan api yang berkobar di kepalanya. Infernape tidak terkalahkan dalam hal kecepatan."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Tarian Lidah Api"
		},

		effect: {
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri. Pilih Energi Dasar {Api} dan Energi Dasar {Petarung} masing-masing paling banyak 1 lembar dari Kartu Pegangan sendiri, lalu kenakan sesukanya pada Pokémon sendiri."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Burn Out"
		},

		effect: {
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 200,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card