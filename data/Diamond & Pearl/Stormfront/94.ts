import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Cyclone Energy",
		fr: "Énergie Cyclone",
		de: "Zyklon-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		fr: "Énergie Cyclone fournit de l'Énergie Colorless. Lorsque vous attachez cette carte de votre main à votre Pokémon Actif, échangez 1 des Pokémon Défenseurs avec 1 des Pokémon de Banc de votre adversaire. Votre adversaire choisit le Pokémon de Banc à échanger.",
		de: "Zyklon-Energie liefert -Energie. Wenn du Zyklon-Energie von deiner Hand an dein Aktives Pokémon anlegst, tausche 1 Verteidigendes Pokémon mit 1 Pokémon auf der Bank deines Gegners. Dein Gegner bestimmt, welches Pokémon auf der Bank getauscht wird."
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 278392
	}
}

export default card
