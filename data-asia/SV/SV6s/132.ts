import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Farfetch'd"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		id: "Farfetch'd memegang batang tumbuhan dengan sayap dan menggunakannya bagaikan pedang untuk membelah musuhnya. Di saat kritis, senjatanya ini juga dapat dijadikan makanan."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Memanggul Masuk Spontan"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan ke Cadangan. Pilih 1 lembar Pokémon Tool dari Deck sendiri, lalu kenakan pada Pokémon ini. Kemudian, kocok Deck."
		}
	}],

	attacks: [{
		name: {
			id: "Sabetan Berkecepatan Suara"
		},

		effect: {
			id: "Pilih 1 Energi Spesial yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card