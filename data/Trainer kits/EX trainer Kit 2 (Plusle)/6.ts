import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	set: Set,

	name: {
		en: "Plusle"
	},

	illustrator: "Katsura Tabata",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	attacks: [{
		name: {
			en: "Pickup Power"
		},

		effect: {
			en: "Search your discard pile for an Energy card, show it to your opponent, and put it into your hand."
		}
	}, {
		name: {
			en: "Rear Spark"
		},

		damage: 10,

		effect: {
			en: "Does 20 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)"
		}
	}]
}

export default card