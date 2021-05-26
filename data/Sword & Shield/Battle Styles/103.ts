import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Pawniard",
		fr: "Scalpion"
	},

	illustrator: "otumami",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	attacks: [{
		name: {
			en: "Swords Dance",
			fr: "Danse Lames"
		},

		effect: {
			en: "During your next turn, this Pokémon’s Slash attack does 70 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l’attaque Tranche de ce Pokémon inflige 70 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance)."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Slash",
			fr: "Tranche"
		},

		damage: 10,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1
}

export default card