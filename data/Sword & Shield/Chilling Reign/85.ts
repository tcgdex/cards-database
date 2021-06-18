import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Crabominable",
		fr: "Crabominable"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Crabrawler",
		fr: "Crabagarre"
	},

	attacks: [{
		name: {
			en: "Double Lariat",
			fr: "Double Lasso"
		},

		effect: {
			en: "Flip 2 coins. This attack does 90 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque côté face."
		},

		damage: "90×",
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Crabhammer",
			fr: "Pince-Masse"
		},

		damage: 130,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card