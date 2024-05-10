import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Minccino"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		id: "Minccino membersihkan kotoran dengan ekornya. Sangat membantu saat sedang bersih-bersih, tetapi karena ia gila kebersihan, bersih-bersih malah jadi lebih merepotkan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menghantam"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Bebersih"
		},

		effect: {
			id: "Pilih paling banyak 2 lembar Pokémon Tool yang dikenakan pada Pokémon di Arena lawan, lalu buang ke Trash."
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card