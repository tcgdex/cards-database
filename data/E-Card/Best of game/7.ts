import { Card } from '../../../interfaces'
import Set from '../Best of game'

const card: Card = {
	set: Set,

	name: {
		en: "Dark Venusaur"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage2",

	attacks: [{
		cost: ["Grass", "Grass", "Grass"],

		name: {
			en: "Horrid Pollen"
		},

		damage: 30,

		effect: {
			en: "Flip 2 coins. If 1 is heads, the Defending Pokémon is now Asleep and Poisoned. If both are heads, the Defending Pokémon is now Confused and Poisoned. If both are tails, the Defending Pokémon is now Paralyzed and Poisoned."
		}
	}]
}

export default card