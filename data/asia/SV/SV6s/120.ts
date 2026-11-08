import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Aron"
	},

	illustrator: "Gapao",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'id-id': "Zirah baja yang melindungi tubuh Aron terbentuk berkat memakan bijih besi dan kadang rel kereta."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Serudukan Nekat"
		},

		effect: {
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 10."
		},

		damage: 20,
		cost: ["Metal"]
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