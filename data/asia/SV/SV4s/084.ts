import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Zubat"
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		'id-id': "Zubat tinggal di gua yang tidak terkena sinar matahari. Ketika pagi tiba, Pokémon ini berkumpul dengan sesamanya dan tidur sambil saling menghangatkan tubuh."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Supersonik"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		cost: ["Darkness"]
	}, {
		name: {
			'id-id': "Bulu Tajam"
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