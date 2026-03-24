import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Stark Mountain",
		fr: "Mont Abrupt",
		de: "Kahlberg"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Une seule fois lors du tour de chaque joueur, ce joueur peut choisir une Énergie Feu ou Combat attachée à 1 de ses Pokémon et déplacer cette Énergie sur 1 de ses Pokémon Feu ou Combat.",
		de: "Einmal während seines Zuges kann jeder Spieler 1 - oder -Energie, die an 1 seiner Pokémon angelegt ist, entfernen und an 1 seiner - oder -Pokémon anlegen.",
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278284,
		tcgplayer: 89519
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
