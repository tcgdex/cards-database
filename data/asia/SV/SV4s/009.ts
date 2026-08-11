import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Steenee"
	},

	illustrator: "Kariya",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'id-id': "Steenee menyebarkan aroma manis yang dapat membuat perasaan menjadi semangat. Aroma tersebut sangat populer sebagai aroma perasa antiperspiran."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Serangan Berputar"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			'id-id': "Double Spin"
		},

		effect: {
			'id-id': "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 40 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "40×",
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card