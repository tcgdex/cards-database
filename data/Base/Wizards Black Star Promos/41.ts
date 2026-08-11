import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Lucky Stadium",
	},
	illustrator: "\"Big Mama\" Tagawa",
	rarity: "Common",
	category: "Trainer",

	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each player's turn (before attacking), that player may flip a coin. If heads, that player draws a card.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86894
			},
		}
	]
}

export default card
