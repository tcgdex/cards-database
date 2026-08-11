import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Whirlipede"
	},

	illustrator: "Krgc",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'id-id': "Whirlipede berputar dengan kecepatan tinggi dan menabrakkan dirinya kepada lawannya. Kecepatan maksimal Pokémon ini mencapai sekitar 100 km/jam."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Poison Circle"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Racun. Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		cost: ["Darkness"]
	}, {
		name: {
			'id-id': "Serangan Berputar"
		},

		damage: 60,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card