import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Drifloon"
	},

	illustrator: "Orca",
	rarity: "One Star",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		en: "It is whispered that any child who mistakes<br />Drifloon for a balloon and holds on to it could<br />wind up missing."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Expand"
		},

		damage: 10,
		cost: ["Psychic"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	
	boosters: [Dialga]
}

export default card