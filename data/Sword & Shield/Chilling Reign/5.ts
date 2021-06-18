import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Ledian",
		fr: "Coxyclaque"
	},

	illustrator: "Sekio",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Ledyba",
		fr: "Coxy"
	},

	attacks: [{
		name: {
			en: "Rapid Draw",
			fr: "Pioche Rapide"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Air Slash",
			fr: "Lame d’Air"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon."
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card