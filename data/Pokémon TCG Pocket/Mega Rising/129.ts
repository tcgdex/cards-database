import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Hippowdon"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		en: "Hippopotas"
	},

	description: {
		en: "It brandishes its gaping mouth in a display of\nfearsome strength. It raises vast quantities of\nsand while attacking."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Crashing Fangs"
		},

		damage: 100,
		cost: ["Fighting", "Fighting", "Colorless"],

		effect: {
			en: "Flip a coin. If tails, during your next turn, this Pokémon can't attack."
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