import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Entei"
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		id: "Ada yang mengatakan bahwa saat Entei mengaum, maka gunung berapi entah pada belahan dunia yang mana akan meletus."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Tekanan"
		},

		effect: {
			id: "Selama Pokémon ini ada di Arena Bertarung, kerusakan akibat serangan yang digunakan oleh Pokémon Bertarung lawan berkurang sejumlah 20."
		}
	}],

	attacks: [{
		name: {
			id: "Blaze Ball"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 20 untuk tiap Energi {Api} yang dikenakan pada Pokémon ini."
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card