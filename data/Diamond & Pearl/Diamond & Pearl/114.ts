import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Speed Stadium",
		fr: "Stade Rapide",
		de: "Tempodrom"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Une seule fois lors du tour de chaque joueur, le joueur peut lancer une pièce jusqu'à ce qu'il ou elle obtienne pile. Pour chaque face, ce joueur pioche une carte.",
		de: "Einmal während seines Zuges kann jeder Spieler so lange 1 Münze werfen, bis zum ersten Mal das Ergebnis 'Zahl' kommt. Für jedes Mal, wenn die Münze 'Kopf' gezeigt hat, zieht dieser Spieler eine Karte."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 277613,
		tcgplayer: 89443
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
