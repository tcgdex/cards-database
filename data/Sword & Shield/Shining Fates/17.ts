import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Reshiram"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	attacks: [{
		name: {
			fr: "Brasier Magnifique"
		},

		effect: {
			fr: "Ce Pokémon s’inflige aussi 60 dégâts."
		},

		damage: 270,
		cost: ["Fire", "Lightning", "Darkness"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card