import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Oddish"
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'id-id': "Pada siang hari, Oddish membenamkan diri ke dalam tanah yang dingin untuk menghindari matahari. Pokémon ini tumbuh dengan bermandikan cahaya bulan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Riang Gembira"
		},

		effect: {
			'id-id': "Ambil 1 kartu dari atas Deck sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Menginjak"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card