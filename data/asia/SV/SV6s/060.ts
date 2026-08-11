import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Palafin"
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		id: "Kemampuan fisiknya tidak jauh berbeda dari Finizen, tetapi Palafin akan berubah wujud dan meningkatkan kekuatannya ketika kawannya berada dalam bahaya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "‌[Ability] Menjadi Perkasa"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri saat Pokémon ini kembali dari Arena Bertarung ke Cadangan. Pilih 1 lembar Palafin {ex} dari Deck sendiri, lalu tukar dengan kartu ini (Semua kartu yang dikenakan, Token Kerusakan, Kondisi Khusus, efek yang dialami, dan lainnya diteruskan ke Pokémon tersebut). Jika ditukar, kembalikan kartu ini ke Deck. Kemudian, kocok Deck."
		}
	}, {
		name: {
			id: "Splash"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card