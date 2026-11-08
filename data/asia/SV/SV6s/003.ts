import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Pinsir"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'id-id': "Pokémon ini saling menilai menggunakan tanduknya. Makin tebal dan mengesankan tanduk yang dimilikinya, Pinsir tersebut makin populer dan menarik perhatian lawan jenisnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Slow Crunch"
		},

		effect: {
			'id-id': "Buang semua Energi yang dikenakan pada Pokémon ini ke Trash. Pada akhir giliran lawan berikutnya, Pokémon yang menerima serangan ini KO."
		},

		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'id-id': "Tanduk Tenaga Super"
		},

		damage: 100,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card