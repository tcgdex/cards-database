import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Drilbur"
	},

	illustrator: "Kariya",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'id-id': "Drilbur merapatkan cakar di kedua tangannya, berputar dengan kecepatan tinggi, dan menabrakkan diri ke arah mangsanya."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Menggali Terus"
		},

		effect: {
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan ke Cadangan. Pilih paling banyak 3 lembar Energi Dasar {Petarung} dari Deck sendiri, lalu buang ke Trash. Kemudian, kocok Deck."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Semburan Pasir"
		},

		damage: 20,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card