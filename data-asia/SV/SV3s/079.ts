import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Donphan"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		id: "Karena diselimuti kulit yang keras, bukanlah perkara serius bagi Donphan jika ditabrak mobil. Namun, Pokémon ini sangat lemah terhadap hujan."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Gunung Longsor"
		},

		effect: {
			id: "Buang 2 kartu dari atas Deck lawan ke Trash."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Putaran Besar"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 160,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card