import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Lugia",
		fr: "Lugia"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Gust",
			fr: "Tornade"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Wind Pressure",
			fr: "Pression Éolienne"
		},

		effect: {
			en: "If your opponent has 5 or fewer cards in their hand, this attack does nothing.",
			fr: "Si votre adversaire a 5 cartes ou moins dans sa main, cette attaque ne fait rien."
		},

		damage: 250,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2
}

export default card