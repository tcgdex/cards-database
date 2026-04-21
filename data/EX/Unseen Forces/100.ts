import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Warp Energy",
		fr: "Énergie de distorsion",
		de: "Warp Energy*"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Warp Energy provides  Energy. When you attach this card from your hand to your Active Pokémon, switch that Pokémon with 1 of your Benched Pokémon.",
		fr: "Énergie de distorsion fournit de l'Énergie Incolore. Lorsque vous attachez cette carte de votre main à votre Pokémon Actif, échangez ce Pokémon avec 1 des Pokémon de votre Banc.",
	},

	thirdParty: {
		cardmarket: 276746,
		tcgplayer: 90473
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
