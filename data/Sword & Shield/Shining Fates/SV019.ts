import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Scolocendre",
		en: "Centiskorch"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		fr: "Grillepattes",
		en: "Sizzlipede"
	},

	attacks: [{
		name: {
			fr: "Flammes Mille-Pattes",
			en: "Hundred Foot Flames"
		},

		effect: {
			fr: "Pour chaque Énergie Fire attachée à ce Pokémon, défaussez la carte du dessus du deck de votre adversaire.",
			en: "For each Fire Energy attached to this Pokémon, discard the top card of your opponent’s deck."
		},

		cost: ["Fire"]
	}, {
		name: {
			fr: "Flammes Calcinantes",
			en: "Searing Flame"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			en: "Your opponent’s Active Pokémon is now Burned."
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