import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Dondozo"
	},

	illustrator: "Tomowaka",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		en: "This Pokémon is a glutton, but it's bad at getting food. It teams up with a Tatsugiri to catch prey."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ocean Cyclone"
		},

		damage: 80,
		cost: ["Water", "Water", "Colorless", "Colorless"],

		effect: {
			en: "This attack also does 10 damage to each of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card