import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Walrein",
		fr: "Kaimorse"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	evolveFrom: {
		en: "Sealeo",
		fr: "Phogleur"
	},

	attacks: [{
		name: {
			en: "Aurora Beam",
			fr: "Onde Boréale"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Hail Prison",
			fr: "Prison de Grêle"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon. Your opponent’s Active Pokémon is now Paralyzed.",
			fr: "Défaussez 2 Énergies de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé."
		},

		damage: 160,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card