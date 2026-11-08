import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Glaceon"
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'id-id': "Dengan menurunkan suhu tubuhnya, Glaceon membekukan bulu badannya menjadi seperti jarum yang lancip dan tajam lalu menerbangkannya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Hawa Dingin Meresap"
		},

		effect: {
			'id-id': "Pada akhir giliran lawan berikutnya, letakkan 9 Token Kerusakan pada Pokémon yang menerima serangan ini."
		},

		damage: 30,
		cost: ["Water"]
	}, {
		name: {
			'id-id': "Misil Pilar Es"
		},

		damage: 70,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card