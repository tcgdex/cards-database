import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Electivire",
		fr: "Élekable"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	evolveFrom: {
		en: "Electabuzz",
		fr: "Élektek"
	},

	attacks: [{
		name: {
			en: "Tumbling Attack",
			fr: "Attaque Trébuchante"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires."
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Lightning Slam",
			fr: "Tacle Foudroyant"
		},

		effect: {
			en: "During your next turn, this Pokémon can’t use Lightning Slam.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Tacle Foudroyant."
		},

		damage: 180,
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card