import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Kangaskhan",
		'fr-fr': "Kangourex"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [115],
	hp: 100,
	types: ["Colorless"],

	description: {
		'en-us': "Although it's carrying its baby in a pouch on\nits belly, Kangaskhan is swift on its feet. It\nintimidates its opponents with quick jabs.",
		'fr-fr': "Porter son petit dans sa poche ventrale ne l'empêche pas d'avoir un bon jeu de jambes. Ses coups rapides intimident ses ennemis."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Cross-Cut",
			'fr-fr': "Coupe Transversale"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			'en-us': "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 40 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 40 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["ho-oh"]
}

export default card