import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Moltres ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "None",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Inferno Dance"
		},

		cost: ["Fire"],

		effect: {
			en: "Flip 3 coins. Take an amount of <span class=\"energy-text energy-text--type-fire\"></span> Energy from your Energy Zone equal to the number of heads and attach it to your Benched <span class=\"energy-text energy-text--type-fire\"></span> Pokémon in any way you like."
		}
	}, {
		name: {
			en: "Heat Blast"
		},

		damage: 70,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card