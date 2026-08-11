import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Warp Energy",
		fr: "Énergie de Distorsion",
		de: "Verkrümmungs-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		en: "Warp Energy provides Colorless Energy. When you attach this card from your hand to your Active Pokémon, switch that Pokémon with 1 of your Benched Pokémon.",
		fr: "Énergie de distorsion fournit de l'Énergie Colorless. Lorsque vous attachez cette carte de votre main à votre Pokémon Actif, échangez ce Pokémon avec 1 des Pokémon de votre Banc.",
		de: "Verkrümmungs-Energie liefert -Energie. Wenn du diese Karte von deiner Hand an dein Aktives Pokémon anlegst, tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 278393,
		tcgplayer: 90475
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["yuta-komatsuda"]
		},
		{
			type: "normal",
			stamp: ["mychael-bryan"]
		},
	]
}

export default card
