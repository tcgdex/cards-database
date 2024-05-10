import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Ninetales"
	},

	illustrator: "SIE NANAHARA",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		id: "Ninetales pintar dan pendendam. Kabarnya orang yang iseng memegang ekornya dikutuk selama 1000 tahun."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Api Hantu"
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			id: "Tarian Ekor Sembilan"
		},

		effect: {
			id: "Letakkan 9 Token Kerusakan pada 1 Pokémon lawan. Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card