import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Kingdra"
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		id: "Sisik Kingdra yang rontok dijadikan sebagai persembahan kepada keluarga kerajaan karena kilauannya yang berkualitas tinggi dan berbobot."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			id: "Whirl Tide"
		},

		effect: {
			id: "Balikkan 6 kartu dari atas Deck sendiri sehingga sisi depannya menjadi menghadap ke atas, serangan ini memberikan kerusakan sejumlah 60 untuk tiap lembar Energi yang ada di antaranya kepada 1 Pokémon lawan. Buang Energi yang sisi depannya dijadikan menghadap ke atas tersebut ke Trash, lalu kocok kembali sisa kartu ke Deck. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Water"]
	}, {
		name: {
			id: "Hydro Splash"
		},

		damage: 120,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card