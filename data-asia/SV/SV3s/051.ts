import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Eelektrik"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		id: "Pola bundar pada tubuh Eelektrik adalah organ penghasil listrik. Pokémon ini menggunakan pola bundarnya untuk mengalirkan listrik setelah membelit lawannya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Shock Wave"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			id: "Lightning Ball"
		},

		damage: 60,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card