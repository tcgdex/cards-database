import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Mudsdale"
	},

	illustrator: "Teeziro",
	rarity: "One Star",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		en: "Mudbray"
	},

	description: {
		en: "This Pokémon has been treasured not just for its physical labor but also because it produces high-quality mud used for making pottery."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "High Horsepower"
		},

		damage: 140,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		effect: {
			en: "This Pokémon also does 40 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4
}

export default card