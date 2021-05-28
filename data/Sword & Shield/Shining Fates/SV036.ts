import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Hydragon",
		en: "Dracovish"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		fr: "Fossile Rare",
		en: "Rare Fossil"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Loi Primordiale",
			en: "Primal Law"
		},

		effect: {
			fr: "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de Pokémon de sa main pour faire évoluer ses Pokémon.",
			en: "As long as this Pokémon is in the Active Spot, your opponent can’t play any Pokémon from their hand to evolve their Pokémon."
		}
	}],

	attacks: [{
		name: {
			fr: "Enfoncement",
			en: "Hammer In"
		},

		damage: 120,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card