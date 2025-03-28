import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Sunflora"
	},

	illustrator: "Ounishi",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		id: "Untuk mengubah cahaya matahari menjadi energi, Sunflora selalu menghadap ke arah matahari selama siang hari."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Serangan Balik Pancaran Matahari"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 60 untuk tiap Energi {Api} yang dikenakan pada semua Pokémon lawan."
		},

		damage: "60×",
		cost: ["Grass"]
	}, {
		name: {
			id: "Mega Drain"
		},

		effect: {
			id: "Pulihkan HP Pokémon ini sejumlah 30."
		},

		damage: 50,
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