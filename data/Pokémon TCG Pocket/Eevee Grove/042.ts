import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Carbink"
	},

	illustrator: "5ban Graphics",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "When beset by attackers, Carbink wipes them all\nout by firing high-energy beams from the gems\nembedded in its body."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Hard Roll"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card