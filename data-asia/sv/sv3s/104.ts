import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Paldean Clodsire"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		id: "Clodsire melawan balik dengan mengeluarkan duri tebal dari tubuhnya ketika diserang musuh. Jurus berbahaya yang memerlukan determinasi untuk melukai dirinya sendiri."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Racun Berceceran"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung kedua pemain masing-masing menjadi Racun."
		},

		cost: ["Darkness"]
	}, {
		name: {
			id: "Venoshock"
		},

		effect: {
			id: "Jika Pokémon Bertarung lawan mengalami kondisi Racun, kerusakan yang diberikan bertambah sejumlah 120."
		},

		damage: "80+",
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card