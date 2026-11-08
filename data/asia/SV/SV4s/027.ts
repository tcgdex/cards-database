import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Iron Moth"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'id-id': "Laporan penangkapannya 0. Data terkait Pokémon ini kurang. Karakteristiknya cocok dengan objek yang tertulis dalam buku kuno."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Thermal Reactor"
		},

		effect: {
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri saat Pokémon ini masuk dari Cadangan ke Arena Bertarung. Pilih sesukanya Energi {Api} yang dikenakan pada Pokémon di Arena sendiri, lalu pindahkan ke Pokémon ini."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Sinar Panas"
		},

		effect: {
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Sinar Panas."
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card