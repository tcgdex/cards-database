import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Diggersby"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		id: "Bulu perut Diggersby memiliki kemampuan menyimpan panas yang mengagumkan. Pada zaman dahulu, orang-orang menggunakan bulu yang rontok dari Pokémon ini untuk membuat baju hangat."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Semprotan Lumpur"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Knock Hammer"
		},

		effect: {
			id: "Buang 1 kartu dari atas Deck lawan ke Trash."
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card