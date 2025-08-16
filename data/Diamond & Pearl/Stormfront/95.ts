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
		fr: "Énergie de distorsion fournit de l'Énergie Colorless. Lorsque vous attachez cette carte de votre main à votre Pokémon Actif, échangez ce Pokémon avec 1 des Pokémon de votre Banc.",
		de: "Verkrümmungs-Energie liefert -Energie. Wenn du diese Karte von deiner Hand an dein Aktives Pokémon anlegst, tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 278393,
		tcgplayer: 90475
	}
}

export default card
