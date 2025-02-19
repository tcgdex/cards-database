import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Arcanine ex"
	},

	illustrator: "PLANETA Saito",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage1",
	evolveFrom: {
		en: "Growlithe"
	},

	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Inferno Onrush"
		},

		effect: {
			en: "This Pokémon also does 20 damage to itself."
		},

		damage: "120"
	}],

	retreat: 2,
	rarity: "Four Diamond",
	boosters: [Pikachu]
}

export default card
