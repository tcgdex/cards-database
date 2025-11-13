import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Balloon Berry",
		fr: "Baie ballon",
		de: "Ballonbeere"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez Baie ballon à 1 de vos Pokémon qui n'a pas d'Outil Pokémon attaché à lui.\n\nLorsque le Pokémon auquel Baie ballon est attachée bat en retraite, défaussez Baie ballon à la place des cartes Énergie.",
		de: "Wenn das Pokémon, an das Ballonbeere angelegt ist, sich zurückzieht, lege Ballonbeere auf deinen Ablagestapel, anstatt Energiekarten abzulegen."
	},

	thirdParty: {
		cardmarket: 274646,
		tcgplayer: 83707
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card

