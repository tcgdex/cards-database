import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Voltoutou"
	},

	illustrator: "sowsow",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	attacks: [{
		name: {
			fr: "Hurlement"
		},

		effect: {
			fr: "Votre adversaire échange son Pokémon Actif contre l’un de ses Pokémon de Banc."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Choc Statique"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card