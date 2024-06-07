import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Loudred"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		id: "Suara keras Loudred selain memberikan kerusakan pada indra pendengar, juga memberikan kerusakan dengan menjadi tekanan udara yang menghempaskan musuh."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Menindih"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Mega Impact"
		},

		damage: 40,
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