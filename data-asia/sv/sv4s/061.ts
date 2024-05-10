import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Gourgeist"
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		id: "Gourgeist mengetuk pintu rumah pada malam bulan baru. Orang yang membukakan pintu akan dibawa ke alam baka."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Labu Lelucon Mengejutkan"
		},

		effect: {
			id: "Saat Pokémon ini KO karena menerima kerusakan akibat serangan dari Pokémon lawan, pilih 2 kartu dari Kartu Pegangan lawan tanpa melihat sisi depan, lalu buang ke Trash."
		}
	}],

	attacks: [{
		name: {
			id: "Pengikat Bayangan"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card