import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Yveltal",
		en: "Yveltal"
	},

	illustrator: "Hasuno",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	attacks: [{
		name: {
			fr: "Annihilation Magnifique",
			en: "Amazing Destruction"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est mis K.O.",
			en: "Your opponent’s Active Pokémon is Knocked Out."
		},

		cost: ["Fire", "Psychic", "Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card