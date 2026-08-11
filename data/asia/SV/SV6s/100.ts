import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Hisuian Arcanine"
	},

	illustrator: "SIE NANAHARA",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'id-id': "Arcanine mengenakan api membara di taringnya dan menerkam. Walau tubuhnya besar, Pokémon ini melakukan gerak tipu dengan cemerlang. Wujudnya saat mempermainkan musuh bagaikan peragaan tari."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Pride Fang"
		},

		effect: {
			'id-id': "Jika Pokémon Cadangan sendiri memiliki Token Kerusakan, kerusakan yang diberikan bertambah sejumlah 90."
		},

		damage: "30+"
	}, {
		name: {
			'id-id': "Kobaran Api Penghangus"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		},

		damage: 90,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card