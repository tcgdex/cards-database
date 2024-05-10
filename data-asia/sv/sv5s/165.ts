import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Cinccino"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		id: "Cinccino maniak kebersihan dan tidak akan membiarkan debu satu titik pun. Pokémon ini melapisi sarang dengan minyak yang diproduksi oleh tubuhnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Menepuk"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Gulir-gulir Spesial"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 70 untuk tiap lembar Energi Spesial yang dikenakan pada Pokémon ini."
		},

		damage: "70×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card