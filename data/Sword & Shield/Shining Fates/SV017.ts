import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Pyrobut",
		en: "Cinderace"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		fr: "Lapyro",
		en: "Raboot"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Libéro",
			en: "Libero"
		},

		effect: {
			fr: "Une fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc vers le Poste Actif, vous pouvez lui attacher jusqu’à 2 cartes Énergie Fire de votre pile de défausse.",
			en: "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may attach up to 2 Fire Energy cards from your discard pile to it."
		}
	}],

	attacks: [{
		name: {
			fr: "But Enflammé",
			en: "Flare Striker"
		},

		effect: {
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			en: "Discard 2 Energy from this Pokémon."
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