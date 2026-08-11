import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu"
	},

	illustrator: "OOYAMA",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [114],
	hp: 80,
	types: ["Grass"],

	description: {
		'en-us': "Hidden beneath a tangle of vines that grows\nnonstop even if the vines are torn off, this\nPokémon's true appearance remains a mystery.",
		'fr-fr': "On ne sait toujours pas ce qui se cache sous ses lianes. Même si on les coupe, elles repoussent à l'infini."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Sleep Powder",
			'fr-fr': "Poudre Dodo"
		},

		damage: 20,
		cost: ["Grass", "Colorless"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh"]
}

export default card