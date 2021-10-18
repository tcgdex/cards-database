import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latios)'

const card: Card = {
	set: Set,

	name: {
		en: "Latios"
	},

	illustrator: "Kyoko Koizumi",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	attacks: [{
		name: {
			en: "Gather Energy"
		},

		damage: 20,

		effect: {
			en: "Flip a coin. If heads, search your deck for a basic Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward."
		}
	}, {
		name: {
			en: "Dragon Claw"
		},

		damage: 40
	}]
}

export default card