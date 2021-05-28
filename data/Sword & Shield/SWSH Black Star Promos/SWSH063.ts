import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu V",
		fr: "Pikachu V"
	},

	illustrator: "Ryota Murayama",
	rarity: "Common",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Pika Ball",
			fr: "Pika Ball"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			en: "Circle Circuit",
			fr: "Cercle Électrik"
		},

		effect: {
			en: "This attack does 30 damage for each of your Benched Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon de Banc."
		},

		damage: "30×",
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card