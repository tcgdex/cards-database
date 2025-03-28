import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Vespiquen"
	},

	illustrator: "kawayoo",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		en: "Combee"
	},

	description: {
		en: "It houses its colony in cells in its body and<br />releases various pheromones to make those<br />grubs do its bidding."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Reckless Charge"
		},

		damage: 120,
		cost: ["Grass", "Grass", "Grass"],

		effect: {
			en: "This Pokémon also does 30 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card