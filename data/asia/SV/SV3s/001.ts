import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Oddish"
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		id: "Pada siang hari, Oddish membenamkan diri ke dalam tanah yang dingin untuk menghindari matahari. Pokémon ini tumbuh dengan bermandikan cahaya bulan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Riang Gembira"
		},

		effect: {
			id: "Ambil 1 kartu dari atas Deck sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Menginjak"
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