import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ninetales",
		'fr-fr': "Feunard"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [38],
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Vulpix"
	},

	description: {
		'en-us': "It is said to live 1,000 years, and each of its tails\nis loaded with supernatural powers.",
		'fr-fr': "On dit qu'il vit 1 000 ans et que chacune de ses queues a un pouvoir magique."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Scorching Breath",
			'fr-fr': "Souffle Brûlant"
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card