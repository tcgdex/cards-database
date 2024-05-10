import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Bunnelby"
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		id: "Bunnelby sangat sensitif terhadap bahaya. Begitu mendengar suara kepak sayap Corviknight, Pokémon ini segera menggali lubang dan membenamkan diri ke dalam tanah."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Injak-injak"
		},

		effect: {
			id: "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
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