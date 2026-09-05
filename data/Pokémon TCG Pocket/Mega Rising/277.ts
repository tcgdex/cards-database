import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Ampharos ex",
		fr: "Méga-Pharamp-ex"
	},

	illustrator: "Amelicart",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [181],
	hp: 210,
	types: ["Lightning"],

	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Lightning Lancer",
			fr: "Lances Foudroyantes"
		},

		damage: 100,
		cost: ["Lightning", "Lightning", "Colorless"],

		effect: {
			en: "1 of your opponent's Benched Pokémon is chosen at random 3 times. For each time a Pokémon was chosen, also do 20 damage to it.",
			fr: "Un des Pokémon de Banc de votre adversaire est choisi au hasard 3 fois. Pour chaque fois où un Pokémon est choisi, infligez-lui 20 dégâts."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-altaria"]
}

export default card