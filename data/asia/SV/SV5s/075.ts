import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Golett"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		id: "Pokémon zaman purba yang dibuat dari tanah liat. Ada juga Golett yang terus-menerus menjejerkan batu besar walaupun tidak jelas alasannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Pertahanan Besi"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan akibat serangan."
		},

		cost: ["Fighting"]
	}, {
		name: {
			id: "Pukulan"
		},

		damage: 40,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card