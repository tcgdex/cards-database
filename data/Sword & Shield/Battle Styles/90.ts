import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Golbat",
		fr: "Nosferalto"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	evolveFrom: {
		en: "Zubat",
		fr: "Nosferapti"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Discreet Draw",
			fr: "Pioche Discrète"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may draw 2 cards.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez piocher 2 cartes."
		}
	}],

	attacks: [{
		name: {
			en: "Air Slash",
			fr: "Lame d’Air"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon."
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card