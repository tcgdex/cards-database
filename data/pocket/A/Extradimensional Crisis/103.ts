import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Nihilego",
		'fr-fr': "Zéroïd"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "Crown",
	category: "Pokemon",

	dexId: [793],
	hp: 70,
	types: ["Darkness"],

	description: {
		'en-us': "A life-form from another world, it was dubbed\na UB and is thought to produce a\nstrong neurotoxin.",
		'fr-fr': "Une forme de vie d'un autre monde, communément appelée « Ultra-Chimère ». On la pense porteuse d'une violente neurotoxine."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "More Poison",
			'fr-fr': "Poison Sans Fin"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon takes +10 damage from being Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire subit + 10 dégâts lorsqu'il est Empoisonné."
		}
	}],

	attacks: [{
		name: {
			'en-us': "New Wave",
			'fr-fr': "New Wave"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card