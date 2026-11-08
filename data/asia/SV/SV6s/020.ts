import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Poltchageist"
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 30,
	types: ["Grass"],

	description: {
		'id-id': "Poltchageist terlihat seperti varian daerah dari Sinistea, tetapi belakangan ini ditemukan bahwa mereka merupakan Pokémon yang tidak ada keterkaitannya sama sekali."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Gudang Persembunyian"
		},

		effect: {
			'id-id': "Selama Pokémon ini ada di Cadangan, Pokémon ini tidak menerima kerusakan dan efek akibat serangan dari Pokémon lawan."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Mengait"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card