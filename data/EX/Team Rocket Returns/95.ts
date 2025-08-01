import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "R Energy",
		de: "R Energy*"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Lege die R Energie an ein Pokémon an, das Dunkles oder Rocket's im Namen hat. Die R Energie zählt als zwei  Energien, so lange sie im Spiel ist. (Zählt nicht als Basis-Energiekate.)Wenn das Pokémon, an das die R Energie angelegt ist, angreift, fügt dieser Angriff dem aktiven Pokémon 10 weitere Schadenspunkte zu (vor Berechnung von Schwäche und Resistenz). Endet dein Zug, lege diese Karte ab."
	},

	thirdParty: {
		cardmarket: 276387,
		tcgplayer: 88496
	}
}

export default card
