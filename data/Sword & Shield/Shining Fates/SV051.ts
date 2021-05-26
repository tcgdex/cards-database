import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Dedenne"
	},

	illustrator: "Mizue",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Folle Aventure"
		},

		effect: {
			fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse qui a l’attaque Folle Aventure."
		},

		damage: "20×",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card