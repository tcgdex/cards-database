import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Minun"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		id: "Minun memiliki kebiasaan mendukung temannya. Jika hampir kalah, jumlah percikan api yang dikeluarkan dari tubuhnya makin bertambah banyak."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Buddy Pulse"
		},

		effect: {
			id: "Berjalan jika ada Plusle di Arena sendiri. Selama Pokémon ini ada di Arena, tiap kali lawan mengenakan Energi dari Kartu Pegangan pada Pokémon, letakkan 2 Token Kerusakan pada Pokémon tersebut untuk tiap lembar Energi. Efek ini tidak berlaku kelipatan meskipun ada Pokémon lain yang memiliki Ability yang sama."
		}
	}],

	attacks: [{
		name: {
			id: "Speed Ball"
		},

		damage: 20,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card