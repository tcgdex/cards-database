import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Hydragon"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		fr: "Fossile Rare"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Loi Primordiale"
		},

		effect: {
			fr: "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de Pokémon de sa main pour faire évoluer ses Pokémon."
		}
	}],

	attacks: [{
		name: {
			fr: "Enfoncement"
		},

		damage: 120,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3
}

export default card