import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Charcadet"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'id-id': "Jiwa bersemayam ke dalam arang terbakar, lalu berubah menjadi Pokémon. Dengan semangat bertarung yang membara, Charcadet menantang pertarungan meskipun dengan lawan yang kuat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Membakar Semangat Petarung"
		},

		effect: {
			'id-id': "Pilih 1 lembar Energi Dasar {Api} dari Deck sendiri, lalu kenakan pada Pokémon ini. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Kepalan Tinju"
		},

		damage: 50,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card