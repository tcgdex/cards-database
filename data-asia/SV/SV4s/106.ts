import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Ambipom"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		id: "Ambipom menggunakan ekornya untuk melakukan segala hal. Jika ia memelukmu menggunakan kedua ekornya, ini tanda benar-benar disukai oleh Pokémon ini."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Mengumpulkan"
		},

		effect: {
			id: "Ambil 2 kartu dari atas Deck sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Hand Sling"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap lembar Kartu Pegangan sendiri."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card