import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Ouistempo",
		en: "Grookey"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	attacks: [{
		name: {
			fr: "Combo-Griffe",
			en: "Fury Swipes"
		},

		effect: {
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			en: "Flip 3 coins. This attack does 10 damage for each heads."
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card