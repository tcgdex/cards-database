import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Vaporeon"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Eevee"
	},


	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Bubble Drain"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon."
		},

		damage: "60"
	}],

	retreat: 2,
	rarity: "Three Diamond",
	boosters: [Mewtwo]
}

export default card
