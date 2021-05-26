import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Charmilly V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Granulés Sucrés"
		},

		effect: {
			fr: "Soignez 30 dégâts de chacun de vos Pokémon de Banc."
		},

		cost: ["Psychic"]
	}, {
		name: {
			fr: "Soupçon de Sucre"
		},

		effect: {
			fr: "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire."
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card