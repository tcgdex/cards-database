import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Ninun)'

const card: Card = {
	dexId: [312],
	set: Set,

	name: {
		en: "Minun"
	},

	illustrator: "Katsura Tabata",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	attacks: [{
		name: {
			en: "Drawup Power"
		},

		effect: {
			en: "Search your deck for an Energy card, show it to your opponent, and put into your hand. Shuffle your deck afterward."
		}
	}, {
		name: {
			en: "Front Spark"
		},

		damage: 20,

		effect: {
			en: "Does 10 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)"
		}
	}]
}

export default card