import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Conkeldurr"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Gurdurr"
	},

	description: {
		en: "Concrete mixed by Conkeldurr is much more durable than normal concrete, even when the compositions of the two materials are the same."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Guts"
		},

		effect: {
			en: "If this Pokémon would be Knocked Out by damage from an attack, flip a coin. If heads, this Pokémon is not Knocked Out, and its remaining HP becomes 10."
		}
	}],

	attacks: [{
		name: {
			en: "Mega Punch"
		},

		damage: 80,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 3
}

export default card