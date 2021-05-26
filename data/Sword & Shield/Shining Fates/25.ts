import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Volcanion"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	attacks: [{
		name: {
			fr: "Enfoncement"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			fr: "Vapeur Explosive"
		},

		effect: {
			fr: "Lancez 2 pièces. Cette attaque inflige 120 dégâts pour chaque côté face."
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