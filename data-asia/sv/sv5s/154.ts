import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Flutter Mane"
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		id: "Pokémon yang memiliki karakteristik yang mirip dengan makhluk hidup bernama Flutter Mane yang disebutkan dalam suatu buku."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Kepakan Malam Gelap"
		},

		effect: {
			id: "Selama Pokémon ini ada di Arena Bertarung, Pokémon Bertarung lawan menjadi tidak memiliki Ability (selain Kepakan Malam Gelap)."
		}
	}],

	attacks: [{
		name: {
			id: "Menerbangkan Kutukan"
		},

		effect: {
			id: "Letakkan sejumlah 2 Token Kerusakan pada Pokémon Cadangan lawan sesukanya."
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card