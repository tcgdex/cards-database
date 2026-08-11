import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Bunnelby"
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'id-id': "Bunnelby sangat sensitif terhadap bahaya. Begitu mendengar suara kepak sayap Corviknight, Pokémon ini segera menggali lubang dan membenamkan diri ke dalam tanah."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Injak-injak"
		},

		effect: {
			'id-id': "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card