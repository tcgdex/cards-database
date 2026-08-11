import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Cyclone Energy",
		fr: "Énergie Cyclone",
		de: "Zyklon-Energie"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "Cyclone Energy provides Colorless Energy. When you attach this card from your hand to your Active Pokémon, switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. Your opponent chooses the Benched Pokémon to switch.",
		de: "Zyklon-Energie liefert -Energie. Wenn du Zyklon-Energie von der Hand an dein Aktives Pokémon anlegst, tausche 1 Verteidigendes Pokémon mit 1 Pokémon auf der Bank deines Gegners. Dein Gegner bestimmt, welches Pokémon auf der Bank getauscht wird.",
		fr: "Énergie Cyclone fournit de l'Énergie Incolore. Lorsque vous attachez cette carte de votre main à votre Pokémon Actif, échangez 1 des Pokémon Défenseurs avec 1 des Pokémon de Banc de votre adversaire. Votre adversaire choisit le Pokémon à échanger.",
	},

	thirdParty: {
		cardmarket: 277396,
		tcgplayer: 84541
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jeremy-scharff-kim"]
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"]
		}
	]
}

export default card
