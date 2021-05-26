import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Lapras",
		fr: "Lokhlass"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	attacks: [{
		name: {
			en: "Aqua Wash",
			fr: "Aqua-Lavage"
		},

		effect: {
			en: "You may put 2 Energy attached to your opponent’s Active Pokémon into their hand.",
			fr: "Vous pouvez ajouter à la main de votre adversaire jusqu’à 2 Énergies attachées à son Pokémon Actif."
		},

		damage: 70,
		cost: ["Water", "Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3
}

export default card