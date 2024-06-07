import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Pupitar"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		id: "Pupitar adalah pupa yang mengamuk dan terbang dengan menyemburkan gas yang terkompres di dalam tubuhnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Lemparan Batu"
		},

		damage: 20,
		cost: ["Fighting"]
	}, {
		name: {
			id: "Serudukan Jet"
		},

		effect: {
			id: "Serangan ini juga memberikan kerusakan sejumlah 20 kepada 1 Pokémon Cadangan sendiri. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 60,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card