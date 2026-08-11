import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Seismitoad"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	description: {
		'id-id': "Pokémon yang populer di kalangan orang lanjut usia karena vibrasi yang dihasilkan oleh tonjolan pada tubuh Seismitoad cocok untuk pijat."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Area Getar-getar"
		},

		effect: {
			'id-id': "Selama Pokémon ini ada di Arena Bertarung, Energi yang dibutuhkan oleh Pokémon Bertarung lawan untuk menggunakan serangan bertambah 1 Energi {Bening}."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Echo Voice"
		},

		effect: {
			'id-id': "Pada giliran sendiri berikutnya, kerusakan akibat Echo Voice Pokémon ini bertambah sejumlah 100."
		},

		damage: 120,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card