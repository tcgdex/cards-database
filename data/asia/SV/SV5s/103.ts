import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Koraidon"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 140,
	types: ["Dragon"],

	description: {
		'id-id': "Kabarnya, identitas asli Winged King yang membelah tanah dengan tinjunya seperti yang tertulis dalam jurnal ekspedisi kuno adalah Koraidon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Pukulan Kacau Primitif"
		},

		effect: {
			'id-id': "Serangan ini memberikan kerusakan sejumlah 30 untuk tiap Pokémon Purba di Arena sendiri."
		},

		damage: "30×",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'id-id': "Merobek"
		},

		effect: {
			'id-id': "Kerusakan akibat serangan ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan."
		},

		damage: 130,
		cost: ["Fire", "Fighting", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card