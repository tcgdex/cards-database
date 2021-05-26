import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Charmilly"
	},

	illustrator: "MAHOU",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Crèmy"
	},

	attacks: [{
		name: {
			fr: "Nappage"
		},

		effect: {
			fr: "Attachez le nombre de cartes Énergie de base voulues de votre main à vos Pokémon comme il vous plaît."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Vampibaiser"
		},

		effect: {
			fr: "Soignez 30 dégâts de ce Pokémon."
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card