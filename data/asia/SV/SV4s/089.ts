import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Trubbish"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'id-id': "Trubbish menyukai tempat kotor. Jika kamar tidak dibersihkan dan dibiarkan dalam keadaan kotor oleh sampah, dia pun akan muncul dan menetap di kamar tersebut."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Gas yang Menyelimuti"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			'id-id': "Venom Hit"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		},

		damage: 30,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card