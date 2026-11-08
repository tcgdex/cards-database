import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Flutter Mane"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'id-id': "Pokémon yang memiliki karakteristik yang mirip dengan makhluk hidup bernama Flutter Mane yang disebutkan dalam suatu buku."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Kepakan Malam Gelap"
		},

		effect: {
			'id-id': "Selama Pokémon ini ada di Arena Bertarung, Pokémon Bertarung lawan menjadi tidak memiliki Ability (selain Kepakan Malam Gelap)."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Menerbangkan Kutukan"
		},

		effect: {
			'id-id': "Letakkan sejumlah 2 Token Kerusakan pada Pokémon Cadangan lawan sesukanya."
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card