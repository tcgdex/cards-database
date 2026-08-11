import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Slaking ex"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 340,
	types: ["Colorless"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Hobi Bolos"
		},

		effect: {
			'id-id': "Jika tidak ada Pokémon {ex}/{V} di Arena lawan, Pokémon ini tidak dapat menggunakan serangan."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Great Swing"
		},

		effect: {
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 280,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card