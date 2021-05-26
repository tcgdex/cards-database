import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Gliscor",
		fr: "Scorvol"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Gligar",
		fr: "Scorplane"
	},

	attacks: [{
		name: {
			en: "Acrobatics",
			fr: "Acrobatie"
		},

		effect: {
			en: "Flip 2 coins. This attack does 40 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Guillotine",
			fr: "Guillotine"
		},

		damage: 90,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card