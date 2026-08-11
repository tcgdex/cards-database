import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Nosepass"
	},

	illustrator: "Nobuhiro Imagawa",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'id-id': "Ketika berburu, Nosepass tidak bergerak dan menarik buruannya menggunakan kekuatan magnet yang kuat. Kadang kekuatan magnet tersebut justru menarik musuh alaminya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Mengumpulkan Besi"
		},

		effect: {
			'id-id': "Pilih paling banyak 2 lembar Energi Dasar {Logam} dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Tubrukan Menggelinding"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card