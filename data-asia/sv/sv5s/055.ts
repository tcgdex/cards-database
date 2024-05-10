import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Iron Thorns"
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		id: "Terdapat karakteristik yang cocok dengan objek bernama Iron Thorns yang diperkenalkan oleh sebuah jurnal ekspedisi pada Pokémon ini."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Destructive Presser"
		},

		effect: {
			id: "Balikkan 5 kartu dari atas Deck sendiri sehingga sisi depannya menjadi menghadap ke atas, serangan ini memberikan kerusakan sejumlah 70 untuk tiap lembar kartu Futur yang ada di antaranya. Buang kartu Futur yang sisi depannya dijadikan menghadap ke atas tersebut ke Trash, lalu kocok kembali sisa kartu ke Deck."
		},

		damage: "70×",
		cost: ["Lightning", "Colorless"]
	}, {
		name: {
			id: "Megaton Lariat"
		},

		damage: 140,
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card