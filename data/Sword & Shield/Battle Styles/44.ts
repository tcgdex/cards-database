import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Electabuzz",
		fr: "Élektek"
	},

	illustrator: "Hasuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Haymaker",
			fr: "Coup de Poing Fracassant"
		},

		effect: {
			en: "During your next turn, this Pokémon can’t use Haymaker.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup de Poing Fracassant."
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card