import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Drampa"
	},

	illustrator: "Mékayu",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'id-id': "Drampa hidup di pegunungan dengan ketinggian melampaui 3000 m. Walau jarang, Pokémon ini turun dari gunung, datang ke kota, dan bermain dengan anak-anak."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Menepuk"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Meriam Geram"
		},

		effect: {
			'id-id': "Jika semua Pokémon Cadangan sendiri memiliki Token Kerusakan, kerusakan yang diberikan bertambah sejumlah 120."
		},

		damage: "100+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card