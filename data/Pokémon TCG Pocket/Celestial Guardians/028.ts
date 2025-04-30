import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Fletchinder"
	},

	illustrator: "Mina Nakai",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		en: "Fletchling"
	},

	description: {
		en: "Fletchinder scatters embers in tall grass where bug Pokémon might be hiding and then catches them as they come leaping out."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Steady Firebreathing"
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card