import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Tyranitar V",
		fr: "Tyranocif V"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Darkness"],

	attacks: [{
		name: {
			en: "Cragalanche",
			fr: "Lapidalanche"
		},

		effect: {
			en: "Discard the top 2 cards of your opponent’s deck.",
			fr: "Défaussez les 2 cartes du dessus du deck de votre adversaire."
		},

		damage: 60,
		cost: ["Darkness", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Single Strike Crush",
			fr: "Écrasement Poing Final"
		},

		effect: {
			en: "Discard the top 4 cards of your deck.",
			fr: "Défaussez les 4 cartes du dessus de votre deck."
		},

		damage: 240,
		cost: ["Darkness", "Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card