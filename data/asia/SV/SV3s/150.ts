import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Cyclizar"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'id-id': "Kabarnya, sudah sejak dahulu kala manusia menunggangi punggung Cyclizar. Situasi tersebut terlukiskan dalam sebuah mural 10 ribu tahun lalu."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Menyeruduk"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Buddy Drive"
		},

		effect: {
			'id-id': "Jika pada giliran ini, Supporter telah dimainkan dari Kartu Pegangan, kerusakan yang diberikan bertambah sejumlah 70."
		},

		damage: "70+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card