import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Torracat"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Two Diamond",
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
			en: "Heat Tackle"
		},

		damage: 40,
		cost: ["Fire"],

		effect: {
			en: "This Pokémon also does 10 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card