import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Upper Energy",
		fr: "Énergie Sup",
		de: "Aufputsch-Energie"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		fr: "Énergie Sup fournit de l'Énergie Colorless. Si vous possédez plus de cartes Récompense que votre adversaire et que cette carte est attachée à un Pokémon (Pokémon LV.X exclus), Énergie Sup fournit de l'Énergie ColorlessColorless.",
		de: "Aufputsch-Energie liefert -Energie. Solange du mehr Preise übrig hast als dein Gegner und diese Karte an ein Pokémon (außer Pokémon LV.X) angelegt ist, liefert Aufputsch-Energie  -Energie."
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 278676,
		tcgplayer: 90248
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "reverse",
			foil: "league"
		},
		{
			type: "normal",
			stamp: ["david-cohen"]
		}
	]
}

export default card
