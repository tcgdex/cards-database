import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Nihilego",
		fr: "Zéroïd"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "Crown",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		en: "A life-form from another world, it was dubbed\na UB and is thought to produce a\nstrong neurotoxin.",
		fr: "Une forme de vie d'un autre monde, communément appelée « Ultra-Chimère ». On la pense porteuse d'une violente neurotoxine."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "More Poison",
			fr: "Poison Sans Fin"
		},

		effect: {
			en: "Your opponent's Active Pokémon takes +10 damage from being Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire subit + 10 dégâts lorsqu'il est Empoisonné."
		}
	}],

	attacks: [{
		name: {
			en: "New Wave",
			fr: "New Wave"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card