import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Coléodôme"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	evolveFrom: {
		fr: "Larvadar"
	},

	attacks: [{
		name: {
			fr: "Protection"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 40 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance)."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Collision"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card