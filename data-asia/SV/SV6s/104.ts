import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Gurdurr"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		id: "Tubuh Gurdurr yang memiliki otot terlatih tidak akan tergerak sedikit pun meskipun sekelompok pegulat profesional bersatu dan menyerangnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Kepalan Tinju"
		},

		damage: 20,
		cost: ["Fighting"]
	}, {
		name: {
			id: "Kekuatan Super"
		},

		effect: {
			id: "Pemain dapat membuat kerusakan yang diberikan bertambah sejumlah 30. Jika dilakukan, Pokémon ini juga menerima kerusakan sejumlah 30."
		},

		damage: "50+",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card