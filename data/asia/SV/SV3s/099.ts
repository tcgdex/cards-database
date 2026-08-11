import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Gastly"
	},

	illustrator: "Nobuhiro Imagawa",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		'id-id': "Gastly melekat pada mangsanya dengan tubuh gasnya, lalu melemahkan mereka dengan mengirimkan racun sedikit demi sedikit melalui kulit mereka."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Mengambil"
		},

		effect: {
			'id-id': "Ambil 1 kartu dari atas Deck sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Api Hantu"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card