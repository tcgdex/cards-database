import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Zoroark"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Zorua"
	},

	description: {
		en: "Stories say those who tried to catch Zoroark were\ntrapped in an illusion and punished."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Illusive Trickery"
		},

		effect: {
			en: "If your opponent's Pokémon is Knocked Out by damage from this Pokémon's attacks, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Night Daze"
		},

		damage: 70,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card