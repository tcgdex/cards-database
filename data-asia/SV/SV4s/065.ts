import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Tinkatink"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		id: "Tinkatink memukul rongsokan besi untuk membuat palu. Pokémon ini akan terus membuat palu baru hingga menghasilkan palu yang sesuai dengan keinginannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Memulung Gunung"
		},

		effect: {
			id: "Lihat 1 kartu dari atas Deck sendiri. Tambahkan kartu tersebut ke Kartu Pegangan atau buang kartu tersebut ke Trash dan ambil 1 kartu dari atas Deck sendiri."
		},

		cost: ["Psychic"]
	}, {
		name: {
			id: "Bergumam"
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card