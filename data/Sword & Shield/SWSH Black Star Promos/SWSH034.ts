import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Zamazenta",
		fr: "Zamazenta"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Sturdy Shield",
			fr: "Bouclier Solide"
		},

		effect: {
			en: "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance)."
		}
	}],

	attacks: [{
		name: {
			en: "Headbang",
			fr: "Frappe de Tête"
		},

		damage: 130,
		cost: ["Metal", "Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2
}

export default card