import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Gurdurr"
	},

	illustrator: "Naoki Saito",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Timburr"
	},

	description: {
		en: "It shows off its muscles to Machoke and other Gurdurr. If it fails to measure up to the other Pokémon, it lies low for a little while."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Strength"
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2
}

export default card