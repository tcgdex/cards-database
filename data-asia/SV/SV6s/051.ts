import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Snorunt"
	},

	illustrator: "Mékayu",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		id: "Dikatakan bahwa rumah yang dikunjungi Snorunt akan menjadi makmur. Suhu -100 ºC tidak masalah bagi Pokémon ini."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Mengejutkan"
		},

		effect: {
			id: "Pilih 1 kartu dari Kartu Pegangan lawan tanpa melihat sisi depan, lihat sisi depan kartu tersebut, lalu kocok kembali ke Deck lawan."
		},

		damage: 20,
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