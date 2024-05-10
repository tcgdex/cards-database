import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Slugma"
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		id: "Slugma sering muncul di wilayah gunung berapi. Ia mencari tempat yang hangat dan merayap berkeliling secara perlahan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Panas Pemanggang"
		},

		effect: {
			id: "Jika Pokémon Bertarung lawan mengalami kondisi Luka Bakar, kerusakan yang diberikan bertambah sejumlah 40."
		},

		damage: "10+",
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card