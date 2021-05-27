import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Scolocendre V",
		en: "Centiskorch V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	attacks: [{
		name: {
			fr: "Chaleur Irradiante",
			en: "Radiating Heat"
		},

		effect: {
			fr: "Vous pouvez défausser une Énergie de ce Pokémon. Dans ce cas, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			en: "You may discard an Energy from this Pokémon. If you do, discard an Energy from your opponent’s Active Pokémon."
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			fr: "Train Brûlant",
			en: "Burning Train"
		},

		damage: 180,
		cost: ["Fire", "Fire", "Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card