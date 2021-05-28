import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Steelix",
		fr: "Steelix"
	},

	illustrator: "NC Empire",
	rarity: "Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	evolveFrom: {
		en: "Onix",
		fr: "Onix"
	},

	attacks: [{
		name: {
			en: "Steel Swing",
			fr: "Frappe d’Acier"
		},

		effect: {
			en: "Flip 2 coins. This attack does 80 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 80 dégâts pour chaque côté face."
		},

		damage: "80×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Heavy Impact",
			fr: "Gros Impact"
		},

		damage: 200,
		cost: ["Metal", "Metal", "Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4
}

export default card