import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Toedscool"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		id: "Meskipun mirip dengan Tentacool, Pokémon ini merupakan spesies yang berbeda. Kakinya ramping, tetapi kecepatan lari Toedscool mencapai 50 km/jam ketika berlari."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Spora Menempel"
		},

		effect: {
			id: "Pilih 1 lembar Energi Dasar {Daun} dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon Cadangan."
		},

		cost: ["Grass"]
	}, {
		name: {
			id: "Pukulan Sulur"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card