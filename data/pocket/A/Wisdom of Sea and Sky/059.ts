import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Suicune",
		'fr-fr': "Suicune"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [245],
	hp: 100,
	types: ["Water"],

	description: {
		'en-us': "It races around the world to purify fouled water.\nIt dashes away with the north wind.",
		'fr-fr': "Il parcourt le vaste monde pour purifier les eaux polluées. Il accompagne le vent du nord."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Cure Stream",
			'fr-fr': "Ruisseau Guérisseur"
		},

		damage: 70,
		cost: ["Water", "Colorless", "Colorless"],

		effect: {
			'en-us': "During your opponent's next turn, attacks used by the Defending Pokémon do −20 damage.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent − 20 dégâts."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card