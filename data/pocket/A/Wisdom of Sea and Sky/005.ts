import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tangrowth",
		'fr-fr': "Bouldeneu"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [465],
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Tangela"
	},

	description: {
		'en-us': "Tangrowth has two arms that it can extend as it\npleases. Recent research has shown that these\narms are, in fact, bundles of vines.",
		'fr-fr': "La science a récemment découvert que les deux bras qu'il peut allonger à volonté sont en fait des lianes entrelacées."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Grass Knot",
			'fr-fr': "Nœud Herbe"
		},

		damage: 10,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			'en-us': "This attack does 40 more damage for each Energy in your opponent's Active Pokémon's Retreat Cost.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie dans le Coût de Retraite du Pokémon Actif de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4,
	boosters: ["ho-oh"]
}

export default card