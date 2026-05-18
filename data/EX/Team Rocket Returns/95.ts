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
		en: "R Energy can be attached only to a Pokémon that has Dark or Rocket's in its name. While in play, R Energy provides 2 Darkness Energy. (Doesn't count as a basic Energy card.) If the Pokémon R Energy is attached to attacks, the attack does 10 more damage to the Active Pokémon (before applying Weakness and Resistance). When your turn ends, discard R Energy.",
		de: "Lege die R Energie an ein Pokémon an, das Dunkles oder Rocket's im Namen hat. Die R Energie zählt als zwei  Energien, so lange sie im Spiel ist. (Zählt nicht als Basis-Energiekate.)Wenn das Pokémon, an das die R Energie angelegt ist, angreift, fügt dieser Angriff dem aktiven Pokémon 10 weitere Schadenspunkte zu (vor Berechnung von Schwäche und Resistenz). Endet dein Zug, lege diese Karte ab."
	},

	thirdParty: {
		cardmarket: 276387,
		tcgplayer: 88496
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"]
		}
	]
}

export default card
