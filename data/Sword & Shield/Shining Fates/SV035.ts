import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Bekaglaçon"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Tête de Gel"
		},

		effect: {
			fr: "Si ce Pokémon a tous ses PV, il subit 60 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance)."
		}
	}],

	attacks: [{
		name: {
			fr: "Blizzard"
		},

		effect: {
			fr: "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: 70,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card