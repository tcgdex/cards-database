import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Claydol"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		id: "Kabarnya Claydol terlahir dari boneka lumpur buatan manusia purba. Pokémon ini menggunakan kekuatan psikokinesis untuk mengambang dan bergerak."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Boneka Gelegar"
		},

		effect: {
			id: "Letakkan Token Kerusakan hingga sisa HP Pokémon Bertarung lawan menjadi sejumlah 10. Setelah itu, berikan kerusakan sejumlah 120 kepada Pokémon ini."
		},

		cost: ["Psychic"]
	}, {
		name: {
			id: "Psychotrip"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card