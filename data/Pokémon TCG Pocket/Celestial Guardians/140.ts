import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Oranguru"
	},

	illustrator: "Naoki Saito",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		en: "People used to mistake Oranguru for a human when they saw it issue command after command to the other Pokémon of the forest."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Primate's Trap"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon cost 1  more, and its Retreat Cost is 1  more."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card