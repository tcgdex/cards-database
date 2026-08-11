import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Clefairy"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		id: "Clefairy berkumpul dan menari bersama kawanannya saat malam bulan purnama. Daerah sekitarnya diselimuti medan magnet yang aneh."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Moon Kick"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card