import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Badabouin",
		en: "Thwackey"
	},

	illustrator: "0313",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		fr: "Ouistempo",
		en: "Grookey"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Avantage du Terrain",
			en: "Lay of the Land"
		},

		effect: {
			fr: "Si vous avez un Stade en jeu, ce Pokémon n’a pas de Coût de Retraite.",
			en: "If you have a Stadium in play, this Pokémon has no Retreat Cost."
		}
	}],

	attacks: [{
		name: {
			fr: "Tapotige",
			en: "Branch Poke"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card