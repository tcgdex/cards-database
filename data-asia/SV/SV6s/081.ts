import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Kadabra"
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		id: "Kadabra tidur dalam kondisi tetap mengambang di udara menggunakan kekuatan psikokinesis. Pokémon ini menggunakan ekornya yang membal sebagai bantal."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Psikis"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi yang dikenakan pada Pokémon Bertarung lawan."
		},

		damage: "10+",
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

	retreat: 1,
	regulationMark: "H"
}

export default card