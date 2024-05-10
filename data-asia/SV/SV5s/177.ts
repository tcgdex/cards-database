import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Scizor ex"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 270,
	types: ["Metal"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Sayap Baja"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 50."
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Cross Breaker"
		},

		effect: {
			id: "Buang paling banyak 2 lembar Energi {Logam} yang dikenakan pada Pokémon ini ke Trash, serangan ini memberikan kerusakan sejumlah 120 untuk tiap lembarnya."
		},

		damage: "120×",
		cost: ["Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card