import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Illumise"
	},

	illustrator: "Orca",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'id-id': "Illumise mengarahkan Volbeat untuk menggambar tanda di langit malam. Ada juga cendekiawan yang meneliti arti tanda tersebut."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Slow Perfume"
		},

		effect: {
			'id-id': "Serangan ini hanya dapat digunakan pada giliran pertama Pemain Kedua. Pilih 1 Pokémon Cadangan lawan, lalu kocok kembali Pokémon tersebut dan semua kartu yang dikenakannya ke Deck lawan."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Melayang Rendah"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card