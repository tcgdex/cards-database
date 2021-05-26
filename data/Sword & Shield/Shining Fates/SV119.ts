import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Métamorph VMAX"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Colorless"],

	evolveFrom: {
		fr: "Métamorph-V"
	},

	attacks: [{
		name: {
			fr: "Morphomax"
		},

		effect: {
			fr: "Choisissez l’une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3
}

export default card