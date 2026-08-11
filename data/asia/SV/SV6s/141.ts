import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Ursaluna Bulan Merah ex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Jurus Terlatih"
		},

		effect: {
			'id-id': "Energi {Bening} yang dibutuhkan oleh Pokémon ini untuk menggunakan Bulan Darah berkurang untuk tiap lembar Kartu Point yang telah diambil lawan."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Bulan Darah"
		},

		effect: {
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 240,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card