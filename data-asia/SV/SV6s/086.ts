import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Flabébé"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		id: "Flabébé yang menunggangi bunga merah. Begitu lahir, ia langsung terbang berkeliling untuk mencari bunga favoritnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Memulihkan Luka"
		},

		effect: {
			id: "Pulihkan HP 1 Pokémon sendiri sejumlah 30."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Angin Peri"
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