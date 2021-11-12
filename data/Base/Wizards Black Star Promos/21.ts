import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Moltres",
		fr: "Sulfura"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		146,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Hyper Flame",
				fr: "Super flamme"
			},
			effect: {
				en: "Flip a coin. If heads, discard 1 Energy card attached to Moltres. If tails, discard all Energy cards attached to Moltres. If you can't discard Energy cards, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie  attachée à Sulfura. Si c'est pile, défaussez toutes les cartes Énergies attachées à Sulfura. Vous ne pouvez utiliser cette attaque que si vous pouvez défausser des cartes Énergies attachées à Sulfura."
			},
			damage: 60,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Les flammes des ailes de ce Pokémon légendaire brûlent d'un feu si ardent qu'elles permettent de voir la nuit comme en plein jour."
	}
}

export default card
