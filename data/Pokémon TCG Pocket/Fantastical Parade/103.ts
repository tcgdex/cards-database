import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Spiritomb"
	},

	illustrator: "Kouki Saitou",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		en: "It was formed by uniting 108 spirits. It has been\nbound to the Odd Keystone to keep it from\ndoing any mischief."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Final Scream"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, do 10 damage to each of your opponent's Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Spooky Shot"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card