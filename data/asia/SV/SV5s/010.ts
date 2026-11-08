import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Turtwig"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'id-id': "Turtwig mandi sinar matahari dan melakukan fotosintesis menggunakan seluruh tubuhnya. Tempurungnya adalah tanah yang mengeras."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Tempurung Padat"
		},

		effect: {
			'id-id': "Kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 20."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Dedaunan"
		},

		damage: 30,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card