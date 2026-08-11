import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Lechonk"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		id: "Lechonk mencari makanan seharian penuh. Meskipun memiliki indra penciuman yang sangat baik, Pokémon ini tidak menggunakannya selain untuk mencari makan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Charm Voice"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card