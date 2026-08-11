import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Braviary"
	},

	illustrator: "Gapao",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		id: "Braviary adalah pendekar langit pemberani yang tidak akan berhenti bertarung demi kawannya meskipun ia akan terluka."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Seret Pergi"
		},

		effect: {
			id: "Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung. Setelah itu, berikan kerusakan sejumlah 40 kepada Pokémon Bertarung yang baru."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Blast Wind"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card