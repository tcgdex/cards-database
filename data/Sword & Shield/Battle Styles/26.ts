import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Heatmor",
		fr: "Aflamanoir"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	attacks: [{
		name: {
			en: "Flare",
			fr: "Flamboiement"
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			en: "Burning Licks",
			fr: "Léchures Brûlantes"
		},

		effect: {
			en: "Flip 2 coins. For each heads, discard an Energy from your opponent’s Active Pokémon.",
			fr: "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie du Pokémon Actif de votre adversaire."
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card