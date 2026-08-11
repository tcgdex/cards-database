import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Cleffa"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		id: "Cleffa memiliki siluet seperti bintang. Karena wujudnya tersebut, Pokémon ini dipercaya datang dengan menaiki meteor."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Ambil Mengepal-ngepal"
		},

		effect: {
			id: "Ambil kartu dari atas Deck hingga jumlah Kartu Pegangan sendiri menjadi 7 lembar."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card