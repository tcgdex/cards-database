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
		en: "Upper Energy provides Colorless Energy. If you have more Prize cards left than your opponent and this card is attached to a Pokémon (excluding Pokémon LV.X), Upper Energy provides ColorlessColorless.",
		fr: "Énergie Sup fournit de l'Énergie Colorless. Si vous possédez plus de cartes Récompense que votre adversaire et que cette carte est attachée à un Pokémon (Pokémon LV.X exclus), Énergie Sup fournit de l'Énergie ColorlessColorless.",
		de: "Aufputsch-Energie liefert -Energie. Solange du mehr Preise übrig hast als dein Gegner und diese Karte an ein Pokémon (außer Pokémon LV.X) angelegt ist, liefert Aufputsch-Energie  -Energie."
	},

	energyType: "Special",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278676,
				tcgplayer: 90248
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 450453,
				tcgplayer: 90248
			}
		},
		{
			type: "reverse",
			foil: "league",
			thirdParty: {
				cardmarket: 278676,
				tcgplayer: 489693
			}
		},
		{
			type: "normal",
			stamp: ["david-cohen"],
			thirdParty: {
				cardmarket: 869034,
				tcgplayer: 479972
			}
		}
	],

}

export default card
