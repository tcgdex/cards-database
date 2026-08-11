import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Latios"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'id-id': "Latios memiliki kecerdasan tinggi dan dapat memahami bahasa manusia. Pokémon berhati lembut yang membenci pertikaian."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Melayang Rendah"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Luster Purge"
		},

		effect: {
			'id-id': "Pilih 3 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 180,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card