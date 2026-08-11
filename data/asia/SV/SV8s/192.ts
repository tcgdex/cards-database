import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Cetitan"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	description: {
		'id-id': "Tanduk rahang atas Cetitan yang memusatkan energi es menjadi bersuhu sangat rendah dan membekukan sekitarnya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Tubuh Tegap"
		},

		effect: {
			'id-id': "Kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Danger Mouth"
		},

		damage: 150,
		cost: ["Water", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card