import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Heracross",
		fr: "Scarhino"
	},

	illustrator: "Hasuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Horn Attack",
			fr: "Koud’Korne"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Single-Horn Throw",
			fr: "Lancer Unicorne"
		},

		effect: {
			en: "Flip 2 coins. If both of them are heads, this attack does 160 more damage.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, cette attaque inflige 160 dégâts supplémentaires."
		},

		damage: "40+",
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