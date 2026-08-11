import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Chimecho"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'id-id': "Chimecho memiliki suara bergelombang ultrasonik. Pokémon ini berpetualang ke tempat jauh dengan melayang menaiki angin."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Mengundang Kantuk"
		},

		effect: {
			'id-id': "Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung. Setelah itu, ubah kondisi Pokémon Bertarung yang baru menjadi Tidur."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Psyshot"
		},

		damage: 70,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card