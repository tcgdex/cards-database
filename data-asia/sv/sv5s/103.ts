import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Koraidon"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 140,
	types: ["Dragon"],

	description: {
		id: "Kabarnya, identitas asli Winged King yang membelah tanah dengan tinjunya seperti yang tertulis dalam jurnal ekspedisi kuno adalah Koraidon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Pukulan Kacau Primitif"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 30 untuk tiap Pokémon Purba di Arena sendiri."
		},

		damage: "30×",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			id: "Merobek"
		},

		effect: {
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan."
		},

		damage: 130,
		cost: ["Fire", "Fighting", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card