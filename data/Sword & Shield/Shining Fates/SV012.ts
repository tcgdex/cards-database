import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Verpom"
	},

	illustrator: "otumami",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	attacks: [{
		name: {
			fr: "Repli"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card