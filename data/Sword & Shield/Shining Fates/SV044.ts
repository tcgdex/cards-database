import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Morpeko"
	},

	illustrator: "Akira Komayama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	attacks: [{
		name: {
			fr: "Tourmente"
		},

		effect: {
			fr: "Choisissez l’une des attaques du Pokémon Actif de votre adversaire. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas utiliser cette attaque."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			fr: "Étincelle"
		},

		effect: {
			fr: "Cette attaque inflige aussi 20 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card