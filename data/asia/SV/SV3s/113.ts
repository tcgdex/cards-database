import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Inkay"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'id-id': "Inkay mengedipkan tubuh bercahayanya ke arah lawan agar lawan kehilangan semangat bertarung dan memanfaatkan kesempatan itu untuk kabur."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Memeluk"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card