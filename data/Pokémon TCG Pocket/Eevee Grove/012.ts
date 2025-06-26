import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Torracat"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		en: "Litten"
	},

	description: {
		en: "Torracat will let its Trainer coddle it once they've\ngrown close, but it's a powerful, sharp-clawed\nPokémon, so its Trainer gets covered in scratches."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Claw Slash"
		},

		damage: 50,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card