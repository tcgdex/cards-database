import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Feebas"
	},

	illustrator: "Kuroimori",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		'id-id': "Pokémon yang paling lusuh. Feebas berkumpul dalam jumlah besar dan tinggal di dasar sungai yang banyak tanaman airnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Lompat Kabur"
		},

		effect: {
			'id-id': "Tukar Pokémon ini dengan Pokémon Cadangan."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card