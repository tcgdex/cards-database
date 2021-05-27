import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Volcanion",
		en: "Volcanion"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	attacks: [{
		name: {
			fr: "Enfoncement",
			en: "Hammer In"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			fr: "Vapeur Explosive",
			en: "Dynamite Steam"
		},

		effect: {
			fr: "Lancez 2 pièces. Cette attaque inflige 120 dégâts pour chaque côté face.",
			en: "Flip 2 coins. This attack does 120 damage for each heads."
		},

		damage: "120×",
		cost: ["Water", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3
}

export default card