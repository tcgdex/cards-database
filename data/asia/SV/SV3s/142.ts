import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Zigzagoon"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'id-id': "Pokémon yang penuh rasa ingin tahu. Karena tertarik dengan apa pun, Zigzagoon selalu berjalan zigzag ke sana kemari."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Sundulan Meloncat"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Cakar Penyayat"
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