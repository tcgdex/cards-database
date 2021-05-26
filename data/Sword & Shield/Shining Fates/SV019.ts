import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Scolocendre"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		fr: "Grillepattes"
	},

	attacks: [{
		name: {
			fr: "Flammes Mille-Pattes"
		},

		effect: {
			fr: "Pour chaque Énergie Fire attachée à ce Pokémon, défaussez la carte du dessus du deck de votre adversaire."
		},

		cost: ["Fire"]
	}, {
		name: {
			fr: "Flammes Calcinantes"
		},

		effect: {
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