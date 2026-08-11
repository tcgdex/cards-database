import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Slakoth"
	},

	illustrator: "Mékayu",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'id-id': "Sosok Slakoth yang bermalas-malasan merangsang rasa malas orang yang melihatnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Bersantai"
		},

		effect: {
			'id-id': "Pulihkan HP Pokémon ini sejumlah 60. Pada giliran sendiri berikutnya, Pokémon ini tidak dapat Mundur."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card