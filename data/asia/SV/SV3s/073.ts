import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Houndstone"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		'id-id': "Houndstone biasanya tidur di dalam makam. Pokémon yang paling setia di antara Pokémon anjing lainnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Tendangan Belakang"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Gigih Mati-matian"
		},

		effect: {
			'id-id': "Jika sisa Kartu Point lawan adalah 4 atau 2 lembar, kerusakan yang diberikan bertambah sejumlah 120."
		},

		damage: "80+",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card