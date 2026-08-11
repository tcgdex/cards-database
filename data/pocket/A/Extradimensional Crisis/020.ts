import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Xurkitree",
		'fr-fr': "Câblifère"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [796],
	hp: 100,
	types: ["Lightning"],

	description: {
		'en-us': "Although it's alien to this world and a danger here, it's apparently\na common organism in the world where it normally lives.",
		'fr-fr': "Cette créature venue d'ailleurs est dangereuse dans notre monde, mais il semblerait qu'elle soit très commune dans le sien."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Electronica",
			'fr-fr': "Electronica"
		},

		damage: 60,
		cost: ["Lightning", "Colorless", "Colorless"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card