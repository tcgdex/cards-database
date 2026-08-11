import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Magcargo",
		'fr-fr': "Volcaropod"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [219],
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Slugma"
	},

	description: {
		'en-us': "Its brittle shell occasionally spouts intense flames\nthat circulate throughout its body.",
		'fr-fr': "Sa coquille, très fragile, projette régulièrement des flammes qui circulent dans son corps."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Spurt Fire",
			'fr-fr': "Éruption de Flammes"
		},

		cost: ["Fire", "Colorless"],

		effect: {
			'en-us': "1 other Pokémon (either yours or your opponent's) is chosen at random 3 times. For each time a Pokémon was chosen, do 50 damage to it.",
			'fr-fr': "Un autre Pokémon (un des vôtres ou un de ceux de votre adversaire) est choisi au hasard 3 fois. Chaque fois qu'un Pokémon est choisi, il subit 50 dégâts."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["ho-oh"]
}

export default card