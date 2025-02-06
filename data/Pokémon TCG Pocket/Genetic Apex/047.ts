import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Moltres ex"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Inferno Dance"
		},

		effect: {
			en: "Flip 3 coins. Take an amount of R Energy from your Energy Zone equal to the number of heads and attach it to your Benched R Pokémon in any way you like."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Heat Blast"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Four Diamond"
}

export default card
