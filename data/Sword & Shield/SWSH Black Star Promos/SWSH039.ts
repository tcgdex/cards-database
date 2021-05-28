import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Tail Whip",
			fr: "Mimi-Queue"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent’s next turn, the Defending Pokémon can’t attack.",
			fr: "Lancez une pièce. Si c’est face, pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Pika Bolt",
			fr: "Pik’Éclair"
		},

		damage: 50,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card