import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hippowdon"
	},

	illustrator: "Teeziro",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [450],
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Hippopotas"
	},

	description: {
		'en-us': "It brandishes its gaping mouth in a display of\nfearsome strength. It raises vast quantities of\nsand while attacking."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Crashing Fangs"
		},

		damage: 100,
		cost: ["Fighting", "Fighting", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If tails, during your next turn, this Pokémon can't attack."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4,
	boosters: ["mega-gyarados"]
}

export default card