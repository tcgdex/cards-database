import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Togepi"
	},

	illustrator: "Natsumi Yoshida",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		'id-id': "Simbol keberuntungan. Kabarnya cangkang Togepi dipenuhi dengan kebahagiaan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Suara Manja"
		},

		effect: {
			'id-id': "Pilih 1 kartu dari Kartu Pegangan lawan tanpa melihat sisi depan, lihat sisi depan kartu tersebut, lalu kocok kembali ke Deck lawan."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Tubrukan Menggelinding"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card