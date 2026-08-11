import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Kyurem Hitam ex"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'id-id': "Ice Age"
		},

		effect: {
			'id-id': "Jika Pokémon Bertarung lawan adalah Pokémon {Naga}, ubah kondisi Pokémon tersebut menjadi Lumpuh."
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Black Frost"
		},

		effect: {
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 30."
		},

		damage: 250,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card