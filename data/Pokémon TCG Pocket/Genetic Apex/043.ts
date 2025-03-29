import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Rapidash",
		fr: "Galopa"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	stage: "Stage1",
	evolveFrom: {
		en: "Ponyta",
		fr: "Ponyta"
	},


	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Fire Mane",
			fr: "Crinière de Feu"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.",
		fr: "Ce Pokémon traverse les plaines à plus de 240 km/h, sa crinière flamboyante frottant au vent."
	}
}

export default card
