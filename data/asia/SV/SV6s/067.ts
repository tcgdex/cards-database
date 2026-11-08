import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Luxio"
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'id-id': "Dengan menghubungkan ekornya ke ekor sesamanya, Luxio dapat mengeluarkan serangan listrik yang lebih kuat dari cakarnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Menggerogoti Erat-erat"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 60,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card