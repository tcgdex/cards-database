import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Wattapik",
		en: "Pincurchin"
	},

	illustrator: "Motofumi Fujiwara",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	attacks: [{
		name: {
			fr: "Épines Choquantes",
			en: "Shocking Needles"
		},

		effect: {
			fr: "Lancez 4 pièces. Cette attaque inflige 30 dégâts pour chaque côté face. Si vous obtenez au moins 2 côtés face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			en: "Flip 4 coins. This attack does 30 damage for each heads. If at least 2 of them are heads, your opponent’s Active Pokémon is now Paralyzed."
		},

		damage: "30×",
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card