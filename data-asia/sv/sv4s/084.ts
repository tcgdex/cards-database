import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Zubat"
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		id: "Zubat tinggal di gua yang tidak terkena sinar matahari. Ketika pagi tiba, Pokémon ini berkumpul dengan sesamanya dan tidur sambil saling menghangatkan tubuh."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Supersonik"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		cost: ["Darkness"]
	}, {
		name: {
			id: "Bulu Tajam"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
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
	regulationMark: "G"
}

export default card