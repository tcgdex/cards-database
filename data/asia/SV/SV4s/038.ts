import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Vanilluxe"
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		'id-id': "Suhu tubuh Vanilluxe kurang lebih sekitar -6 °C. Kabarnya Pokémon ini terlahir dari dua ekor Vanillish yang menempel menjadi satu."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Ruangan Dingin Ekstrem"
		},

		effect: {
			'id-id': "Selama Pokémon ini ada di Arena, Pokémon lawan dengan sisa HP 40 atau kurang tidak dapat menggunakan serangan."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Misil Pilar Es"
		},

		damage: 110,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card