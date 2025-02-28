import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Lumineon"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		en: "Finneon"
	},

	description: {
		en: "With its shining light, it lures its prey close. However, the light also happens to attract ferocious fish Pokémon—its natural predators."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Aqua Liner"
		},

		cost: ["Water", "Water"],

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 0,
	rarity: "Two Diamond"
}

export default card
