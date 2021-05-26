import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Pyrobut"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		fr: "Lapyro"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Libéro"
		},

		effect: {
			fr: "Une fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc vers le Poste Actif, vous pouvez lui attacher jusqu’à 2 cartes Énergie Fire de votre pile de défausse."
		}
	}],

	attacks: [{
		name: {
			fr: "But Enflammé"
		},

		effect: {
			fr: "Défaussez 2 Énergies de ce Pokémon."
		},

		damage: 190,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card