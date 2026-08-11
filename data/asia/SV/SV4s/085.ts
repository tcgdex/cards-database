import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Golbat"
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'id-id': "Golbat berjalan dengan cekatan menggunakan kakinya yang kecil. Pokémon ini mengendap mendekati mangsa yang sedang tidur, menusukkan taringnya, dan menyedot darah."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Mengisap Darah"
		},

		effect: {
			'id-id': "Pulihkan HP Pokémon ini sejumlah kerusakan yang diberikan kepada Pokémon Bertarung lawan."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
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