import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Crawdaunt",
		fr: "Colhomard"
	},

	illustrator: "Hasegawa Saki",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		en: "Corphish",
		fr: "Écrapince"
	},

	attacks: [{
		name: {
			en: "Knock Off",
			fr: "Sabotage"
		},

		effect: {
			en: "Discard a random card from your opponent’s hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire."
		},

		damage: 60,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Crabhammer",
			fr: "Pince-Masse"
		},

		damage: 140,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card