import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Trevenant"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'id-id': "Trevenant memiliki kemampuan untuk memanjangkan akar tipis dari ujung kakinya untuk dikaitkan ke pepohonan di hutan dan mengendalikan pepohonan tersebut semaunya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Miasma Hutan"
		},

		effect: {
			'id-id': "Selama Pokémon ini ada di Arena Bertarung, tiap kali Pokémon Check, letakkan 1 Token Kerusakan pada Pokémon Bertarung lawan."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Mengurung"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card