import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Magcargo",
		fr: "Volcaropod"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [219],
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		en: "Slugma"
	},

	description: {
		en: "Its brittle shell occasionally spouts intense flames\nthat circulate throughout its body.",
		fr: "Sa coquille, très fragile, projette régulièrement des flammes qui circulent dans son corps."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Spurt Fire",
			fr: "Éruption de Flammes"
		},

		cost: ["Fire", "Colorless"],

		effect: {
			en: "1 other Pokémon (either yours or your opponent's) is chosen at random 3 times. For each time a Pokémon was chosen, do 50 damage to it.",
			fr: "Un autre Pokémon (un des vôtres ou un de ceux de votre adversaire) est choisi au hasard 3 fois. Chaque fois qu'un Pokémon est choisi, il subit 50 dégâts."
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