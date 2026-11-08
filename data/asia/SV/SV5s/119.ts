import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Cinccino"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'id-id': "Cinccino maniak kebersihan dan tidak akan membiarkan debu satu titik pun. Pokémon ini melapisi sarang dengan minyak yang diproduksi oleh tubuhnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Menepuk"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Gulir-gulir Spesial"
		},

		effect: {
			'id-id': "Serangan ini memberikan kerusakan sejumlah 70 untuk tiap lembar Energi Spesial yang dikenakan pada Pokémon ini."
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