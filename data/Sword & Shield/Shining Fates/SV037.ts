import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Hydragla",
		en: "Arctovish"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		fr: "Fossile Rare",
		en: "Rare Fossil"
	},

	attacks: [{
		name: {
			fr: "Visage Dur",
			en: "Hard Face"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 60 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			en: "During your opponent’s next turn, this Pokémon takes 60 less damage from attacks (after applying Weakness and Resistance)."
		},

		damage: 90,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			fr: "Souffle Froid",
			en: "Cold Breath"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			en: "Your opponent’s Active Pokémon is now Asleep."
		},

		damage: 130,
		cost: ["Water", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card