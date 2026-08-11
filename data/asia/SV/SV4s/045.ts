import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Veluza"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		id: "Begitu membuang daging yang tidak dibutuhkan, hati Veluza menjadi terasah, dan kekuatan psikokinesisnya meningkat. Daging berlebih Pokémon ini hambar namun lezat."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Perasaan Mengikis Diri"
		},

		effect: {
			id: "Saat Pokémon ini ada di Arena Bertarung dan KO karena menerima kerusakan akibat serangan dari Pokémon lawan, pilih paling banyak 2 lembar Energi {Air} yang dikenakan pada Pokémon ini, lalu pindahkan ke 1 Pokémon Cadangan."
		}
	}],

	attacks: [{
		name: {
			id: "Pompa Air"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 20 untuk tiap Energi {Air} yang dikenakan pada Pokémon ini."
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card