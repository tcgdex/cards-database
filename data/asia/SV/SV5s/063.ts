import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Duosion"
	},

	illustrator: "mele",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		id: "Kabarnya ketika kedua otak Duosion sependapat, lingkup dari kekuatan psikokinesis Pokémon ini mencapai 1 km di sekeliling dirinya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Double Trick"
		},

		effect: {
			id: "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 30 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "30×",
		cost: ["Colorless"]
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
	regulationMark: "H"
}

export default card