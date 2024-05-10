import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Thundurus"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		id: "Thundurus terbang sambil menjatuhkan petir ke sana kemari dan menyebabkan kebakaran gunung, sehingga Pokémon ini tidak disukai."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Cuaca Buruk"
		},

		effect: {
			id: "Selama Pokémon ini ada di Arena Bertarung, semua Pokémon Cadangan sendiri tidak menerima kerusakan akibat serangan lawan."
		}
	}],

	attacks: [{
		name: {
			id: "Gigant Bolt"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 90."
		},

		damage: 140,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card