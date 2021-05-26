import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Koko V",
		fr: "Tokorico V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Electro Ball",
			fr: "Boule Élek"
		},

		damage: 40,
		cost: ["Lightning"]
	}, {
		name: {
			en: "Spiral Thunder",
			fr: "Tonnerre en Spirale"
		},

		effect: {
			en: "This attack does 40 more damage for each Energy attached to all of your opponent’s Pokémon.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie attachée à tous les Pokémon de votre adversaire."
		},

		damage: "20+",
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card