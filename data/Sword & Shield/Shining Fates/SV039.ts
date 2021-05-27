import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Voltoutou",
		en: "Yamper"
	},

	illustrator: "sowsow",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	attacks: [{
		name: {
			fr: "Hurlement",
			en: "Roar"
		},

		effect: {
			fr: "Votre adversaire échange son Pokémon Actif contre l’un de ses Pokémon de Banc.",
			en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Choc Statique",
			en: "Static Shock"
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