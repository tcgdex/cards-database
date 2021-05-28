import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Luxray",
		fr: "Luxray"
	},

	illustrator: "Kazuma Koda",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	evolveFrom: {
		en: "Luxio",
		fr: "Luxio"
	},

	attacks: [{
		name: {
			en: "Electrostep",
			fr: "Électro-Pas"
		},

		effect: {
			en: "This attack does 40 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.) Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Cette attaque inflige 40 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) Échangez ce Pokémon contre l’un de vos Pokémon de Banc."
		},

		cost: ["Lightning"]
	}, {
		name: {
			en: "Scar Strikes",
			fr: "Acharnement"
		},

		effect: {
			en: "If your opponent’s Active Pokémon already has any damage counters on it, this attack does 100 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 100 dégâts supplémentaires."
		},

		damage: "100+",
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card