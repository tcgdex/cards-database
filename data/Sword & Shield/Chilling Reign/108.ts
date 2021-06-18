import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Single Strike Urshifu",
		fr: "Shifours Poing Final"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		en: "Kubfu",
		fr: "Wushours"
	},

	attacks: [{
		name: {
			en: "Field Crush",
			fr: "Broyeur de Terrain"
		},

		effect: {
			en: "If your opponent has a Stadium in play, discard it.",
			fr: "Si votre adversaire a un Stade en jeu, défaussez-le."
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			en: "Fists of Strife",
			fr: "Poings de Dispute"
		},

		effect: {
			en: "If this Pokémon has any damage counters on it, this attack does 100 more damage.",
			fr: "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 100 dégâts supplémentaires."
		},

		damage: "100+",
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card