import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Bleuseille"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		fr: "Minisange"
	},

	attacks: [{
		name: {
			fr: "Picore"
		},

		effect: {
			fr: "Avant d’infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			fr: "Bec Vrille"
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

	retreat: 1
}

export default card