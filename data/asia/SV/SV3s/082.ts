import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Nosepass"
	},

	illustrator: "Nobuhiro Imagawa",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		id: "Ketika berburu, Nosepass tidak bergerak dan menarik buruannya menggunakan kekuatan magnet yang kuat. Kadang kekuatan magnet tersebut justru menarik musuh alaminya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Mengumpulkan Besi"
		},

		effect: {
			id: "Pilih paling banyak 2 lembar Energi Dasar {Logam} dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Tubrukan Menggelinding"
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