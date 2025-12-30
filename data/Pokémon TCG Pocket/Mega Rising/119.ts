import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Carbink"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [703],
	hp: 50,
	types: ["Psychic"],

	description: {
		en: "It's said that somewhere in the world, there's\na mineral vein housing a large pack of slumbering\nCarbink. It's also said that this pack has a queen."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Guard Press"
		},

		damage: 30,
		cost: ["Psychic"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −30 damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card