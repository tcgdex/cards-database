import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	dexId: [380],
	set: Set,

	name: {
		en: "Latias"
	},

	illustrator: "Nakaoka",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	attacks: [{
		name: {
			en: "Dragon Dew"
		},

		damage: 10,

		effect: {
			en: "Remove 1 damage counter from 1 of your Pokémon."
		}
	}, {
		name: {
			en: "Heat Blast"
		},

		damage: 40
	}]
}

export default card