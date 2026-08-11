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
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Once during each player's turn, that player may choose a Fire or Fighting Energy attached to 1 of his or her Pokémon and move that Energy to 1 of his or her Pokémon.",
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
