import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Plusle"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'id-id': "Plusle menyerap listrik dari tiang listrik. Listrik yang dipendam di tubuhnya dikorsletingkan untuk membuat suara."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Damage Plus"
		},

		effect: {
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon Bertarung lawan."
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card