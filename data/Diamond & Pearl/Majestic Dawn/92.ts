import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Call Energy",
		fr: "Appel à l'énergie",
		de: "Ruf-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		fr: "Appel à l'énergie fournit de l'Énergie Colorless. Une seule fois lors de votre tour, si le Pokémon auquel Appel à l'énergie est attachée est votre Pokémon Actif, vous pouvez choisir dans votre deck jusqu'à 2 Pokémon de base et les placer sur votre Banc. Mélangez alors votre deck. Votre tour est terminé.",
		de: "Ruf-Energie liefert -Energie. Einmal während deines Zuges kannst du, wenn das Pokémon, an das Ruf-Energie angelegt ist, dein Aktives Pokémon ist, dein Deck nach bis zu 2 Basis-Pokémon-Karten durchsuchen und diese auf die Bank legen. Wenn du das machst, mische dein Deck und dein Zug ist beendet."
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 278141,
		tcgplayer: 84086
	}
}

export default card
