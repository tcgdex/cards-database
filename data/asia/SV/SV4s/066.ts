import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Tinkatink"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'id-id': "Tinkatink memukul rongsokan besi untuk membuat palu. Pokémon ini akan terus membuat palu baru hingga menghasilkan palu yang sesuai dengan keinginannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Kekuatan Laten"
		},

		effect: {
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 40,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card