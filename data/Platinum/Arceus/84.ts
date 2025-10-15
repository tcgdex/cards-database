import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Buffer Piece",
		de: "Dämpfender Talisman"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach Buffer Piece to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it.\nIf that Pokémon is Knocked Out, discard this card.",
		de: "Schaden, der dem Pokémon, an das Dämpfender Talisman angelegt ist, durch einen gegnerischen Angriff zugefügt wird, wird um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden). Nachdem du Dämpfender Talisman ausgespielt hast, lege Dämpfender Talisman am Ende des nächsten Zuges deines Gegners auf den Ablagestapel."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 278956,
		tcgplayer: 84014
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
