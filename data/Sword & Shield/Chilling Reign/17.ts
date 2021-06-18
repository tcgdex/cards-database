import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Thwackey",
		fr: "Badabouin"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		en: "Grookey",
		fr: "Ouistempo"
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

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card