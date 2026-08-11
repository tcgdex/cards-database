import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Flabébé"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		'id-id': "Flabébé yang menunggangi bunga merah. Begitu lahir, ia langsung terbang berkeliling untuk mencari bunga favoritnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Memulihkan Luka"
		},

		effect: {
			'id-id': "Pulihkan HP 1 Pokémon sendiri sejumlah 30."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Angin Peri"
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card