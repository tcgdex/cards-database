import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Zapdos"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		id: "Zapdos mampu mengendalikan listrik sesukanya. Ada kisah yang menyampaikan bahwa sarangnya ada di dalam awan guntur gelap."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Gelombang Elektromagnetik"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		cost: ["Lightning"]
	}, {
		name: {
			id: "Ledakan Listrik"
		},

		effect: {
			id: "Buang semua Energi yang dikenakan pada Pokémon ini ke Trash."
		},

		damage: 190,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card