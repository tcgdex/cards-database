import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Shroomish"
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'id-id': "Shroomish adalah Pokémon yang melindungi dirinya dengan menyebarkan spora beracun dari ujung kepalanya ketika mendeteksi bahaya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Sundulan Dua Kali"
		},

		effect: {
			'id-id': "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "10×",
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Bom Benih"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card