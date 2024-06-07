import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Vulpix"
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		id: "Seiring pertumbuhannya, keenam ekor Vulpix menjadi makin cantik dan bulunya makin lembut. Jika dipeluk, Pokémon ini terasa agak hangat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Lidah Api"
		},

		damage: 10,
		cost: ["Fire"]
	}, {
		name: {
			id: "Cahaya Membingungkan"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		damage: 20,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card