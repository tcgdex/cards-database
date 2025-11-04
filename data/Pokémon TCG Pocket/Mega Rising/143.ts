import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Sandygast"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "It flings sand into the eyes of its prey and tries to\nclose in on them while they're blinded, but since\nSandygast is so slow, the prey tends to escape."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sand Attack"
		},

		damage: 20,
		cost: ["Fighting", "Colorless"],

		effect: {
			en: "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card