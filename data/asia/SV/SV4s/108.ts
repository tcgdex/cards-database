import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Whismur"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'id-id': "Begitu bersuara, Whismur dikejutkan oleh suaranya sendiri, sehingga Pokémon ini bersuara makin keras. Setelah lelah karena terus bersuara, Pokémon ini akan tertidur."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Mendorong Kuat"
		},

		effect: {
			'id-id': "Tukar Pokémon Bertarung lawan dengan Pokémon Cadangan. [Pokémon yang akan dimasukkan ke Arena Bertarung dipilih oleh lawan.]"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card