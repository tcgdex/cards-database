import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "TV Reporter",
		fr: "Journaliste télé",
		de: "TV Reporter"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Draw 3 cards. Then discard any 1 card from your hand.",
		fr: "Piochez 3 cartes. Ensuite, défaussez n'importe quelle carte de votre main.",
		de: "Ziehe 3 Karten. Lege danach 1 Karte von deiner Hand auf deinen Ablagestapel.",
	},

	thirdParty: {
		cardmarket: 277287,
		tcgplayer: 90085
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jeremy-scharff-kim"]
		},
		{
			type: "normal",
			stamp: ["paul-atanassov"]
		},
	]
}

export default card
