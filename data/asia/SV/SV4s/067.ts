import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Tinkatuff"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'id-id': "Gunung rongsokan logam adalah sarangnya. Untuk menguji kekuatan palunya, para Tinkatuff saling memukul satu sama lain dengan kencang."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Ayunan Logam Paduan"
		},

		effect: {
			'id-id': "Jika Pokémon ini mengenakan Energi {Logam}, kerusakan yang diberikan bertambah sejumlah 40."
		},

		damage: "20+",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card