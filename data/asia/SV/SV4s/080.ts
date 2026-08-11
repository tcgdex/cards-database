import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Garganacl"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	description: {
		id: "Garganacl menaburkan garam kepada Pokémon yang terluka dengan menggosok-gosokkan ujung jarinya. Luka parah pun akan segera sembuh."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			id: "Garam Batu Energi"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pilih 1 lembar Energi Dasar {Petarung} dari Trash sendiri, lalu kenakan pada Pokémon sendiri. Setelah itu, pulihkan HP Pokémon yang telah dikenakan Energi sejumlah 30."
		}
	}],

	attacks: [{
		name: {
			id: "Land Crush"
		},

		damage: 140,
		cost: ["Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card