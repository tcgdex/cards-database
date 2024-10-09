import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Frogadier"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		id: "Frogadier menggunakan serangan dengan melemparkan batu kecil berlapis gelembung. Memiliki kontrol yang akurat sehingga dapat mengenai kaleng kosong dari jarak 30 m."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Air Pelumpuh"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card