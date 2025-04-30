import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Wimpod"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		en: "It's nature's cleaner—it eats anything and everything,  including garbage and rotten things. The ground near  its nest is always clean."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Wimp Out"
		},

		effect: {
			en: "During your first turn, this Pokémon has no Retreat Cost."
		}
	}],

	attacks: [{
		name: {
			en: "Gnaw"
		},

		damage: 30,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card