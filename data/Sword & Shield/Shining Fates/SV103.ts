import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Moumouton"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	attacks: [{
		name: {
			fr: "Développement"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 10 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance)."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card