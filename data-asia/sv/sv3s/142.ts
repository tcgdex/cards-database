import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Zigzagoon"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		id: "Pokémon yang penuh rasa ingin tahu. Karena tertarik dengan apa pun, Zigzagoon selalu berjalan zigzag ke sana kemari."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Sundulan Meloncat"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Cakar Penyayat"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card