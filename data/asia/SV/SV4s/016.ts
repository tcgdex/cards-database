import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Toedscool"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'id-id': "Meskipun mirip dengan Tentacool, Pokémon ini merupakan spesies yang berbeda. Kakinya ramping, tetapi kecepatan lari Toedscool mencapai 50 km/jam ketika berlari."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Kick"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Menyerap"
		},

		effect: {
			'id-id': "Pulihkan HP Pokémon ini sejumlah 20."
		},

		damage: 40,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card