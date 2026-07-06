import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Pokémon Tower",
	},
	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",

	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If the effect of a Pokémon Power, attack, Energy card, or Trainer card would put a card in a discard pile into its owner's hand, that card stays in that discard pile instead.",
	},

	thirdParty: {
		tcgplayer: 88240
	},

	variants: [
		{
			type: "normal",
		}
	]
}

export default card
