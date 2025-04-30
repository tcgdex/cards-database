import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Persian"
	},

	illustrator: "kirisAki",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Alolan Meowth"
	},

	description: {
		en: "The round face of Alolan Persian is considered to be a symbol of prosperity in the Alola region, so these Pokémon are very well cared for."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fur Coat"
		},

		effect: {
			en: "This Pokémon takes −20 damage from attacks."
		}
	}],

	attacks: [{
		name: {
			en: "Claw Slash"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card