import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Shaymin"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "One Star",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		en: "It can dissolve toxins in the air to instantly<br />transform ruined land into a lush field of flowers."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sky Support"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, your Active Basic Pokémon's Retreat Cost is 1 less."
		}
	}],

	attacks: [{
		name: {
			en: "Flap"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card