import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Drednaw"
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		en: "Chewtle"
	},

	description: {
		en: "Its massive, jagged teeth can crush a boulder in a single bite. This Pokémon has an extremely vicious disposition."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Crunch"
		},

		damage: 70,
		cost: ["Water", "Water", "Water"],

		effect: {
			en: "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Diamond"
}

export default card
