import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Mawile"
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		'id-id': "Dengan wajahnya yang kalem, Mawile membuat lawan lengah dan menggigit dengan rahang besarnya. Begitu tergigit, Pokémon ini tidak akan pernah melepaskannya lagi."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Mengundang dan Menyakiti"
		},

		effect: {
			'id-id': "Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung. Setelah itu, berikan kerusakan sejumlah 30 kepada Pokémon Bertarung yang baru."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Taring Tajam"
		},

		damage: 100,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card