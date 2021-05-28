import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Centiskorch",
		fr: "Scolocendre"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Sizzlipede",
		fr: "Grillepattes"
	},

	attacks: [{
		name: {
			en: "Hundred Foot Flames",
			fr: "Flammes Mille-Pattes"
		},

		effect: {
			en: "For each Fire Energy attached to this Pokémon, discard the top card of your opponent’s deck.",
			fr: "Pour chaque Énergie Fire attachée à ce Pokémon, défaussez la carte du dessus du deck de votre adversaire."
		},

		cost: ["Fire"]
	}, {
		name: {
			en: "Searing Flame",
			fr: "Flammes Calcinantes"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé."
		},

		damage: 110,
		cost: ["Fire", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card