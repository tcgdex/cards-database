import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Bleuseille",
		en: "Corvisquire"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		fr: "Minisange",
		en: "Rookidee"
	},

	attacks: [{
		name: {
			fr: "Picore",
			en: "Pluck"
		},

		effect: {
			fr: "Avant d’infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			en: "Before doing damage, discard all Pokémon Tools from your opponent’s Active Pokémon."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			fr: "Bec Vrille",
			en: "Drill Peck"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card