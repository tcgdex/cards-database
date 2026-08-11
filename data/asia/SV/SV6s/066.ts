import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Shinx"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'id-id': "Shinx menghasilkan listrik dengan kontraksi dan regangan ototnya. Ketika terdesak, bulu Pokémon ini bercahaya menyilaukan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Rasa Ingin Tahu"
		},

		effect: {
			'id-id': "Lihat Kartu Pegangan lawan."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Berpijar-pijar"
		},

		damage: 30,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card