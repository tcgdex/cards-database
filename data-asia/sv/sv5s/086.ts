import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Gastly"
	},

	illustrator: "Fujimoto Gold",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		id: "Gastly melekat pada mangsanya dengan tubuh gasnya, lalu melemahkan mereka dengan mengirimkan racun sedikit demi sedikit melalui kulit mereka."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Sinar Misteri"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		},

		cost: ["Darkness"]
	}, {
		name: {
			id: "Gas yang Menyelimuti"
		},

		damage: 30,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card