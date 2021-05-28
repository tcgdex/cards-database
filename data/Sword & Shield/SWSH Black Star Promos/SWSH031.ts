import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Morpeko",
		fr: "Morpeko"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Famished",
			fr: "Glouton"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Thunder Shock",
			fr: "Éclair"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
		},

		damage: 40,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card