import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Galvagon",
		en: "Dracozolt"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Fossile Rare",
		en: "Rare Fossil"
	},

	attacks: [{
		name: {
			fr: "Amplificateur",
			en: "Amping Up"
		},

		effect: {
			fr: "Pendant votre prochain tour, l’attaque Amplificateur de ce Pokémon inflige 90 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			en: "During your next turn, this Pokémon’s Amping Up attack does 90 more damage (before applying Weakness and Resistance)."
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			fr: "Giga Impact",
			en: "Giga Impact"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			en: "During your next turn, this Pokémon can’t attack."
		},

		damage: 200,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card