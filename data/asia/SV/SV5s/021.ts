import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Brambleghast"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'id-id': "Brambleghast berkelana di wilayah gersang. Terkadang Pokémon ini bermunculan dalam jumlah besar dan mengubur sebuah kota."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Jiwa Tangguh"
		},

		effect: {
			'id-id': "HP maksimal Pokémon ini bertambah sejumlah 50 untuk tiap 1 lembar Kartu Point yang telah diambil lawan."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Powerful Needle"
		},

		effect: {
			'id-id': "Lempar koin untuk tiap Energi yang dikenakan pada Pokémon ini. Serangan ini memberikan kerusakan sejumlah 80 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "80×",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card