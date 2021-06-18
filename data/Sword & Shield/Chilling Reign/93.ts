import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Kubfu",
		fr: "Wushours"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Training",
			fr: "Entraînement"
		},

		effect: {
			en: "Search your deck for a basic Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Elbow Strike",
			fr: "Coup de Coude"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card