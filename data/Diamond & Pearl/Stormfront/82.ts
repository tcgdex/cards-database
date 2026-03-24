import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Conductive Quarry",
		fr: "Carrière conductrice",
		de: "Leitmetall-Mine"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Une seule fois lors du tour de chaque joueur, ce joueur lance une pièce. Si c'est face, il cherche dans sa pile de défausse une carte Énergie Électrique ou Métal, la montre à son adversaire et la place dans sa main.",
		de: "Einmal während seines Zuges kann jeder Spieler 1 Münze werfen. Bei \"Kopf\" durchsucht dieser Spieler seinen Ablagestapel nach 1 - oder -Energiekarte, zeigt sie seinem Gegner und nimmt sie auf die Hand.",
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278380,
		tcgplayer: 84417
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
