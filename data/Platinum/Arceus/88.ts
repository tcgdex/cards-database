import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Lucky Egg",
		de: "Glücks-Ei"
	},

	illustrator: "Nobuyuki Fujimoto",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach Lucky Egg to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. When the Pokémon this card is attached to is Knocked Out by damage from an opponent's attack, draw cards until you have 7 cards in your hand.",
		de: "Wenn das Pokémon, an das diese Karte angelegt ist, durch Schaden eines gegnerischen Angriffs kampfunfähig wird, ziehe so viele Karten, bis du 7 Karten auf deiner Hand hast."
	},

	trainerType: "Tool",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86892,
				cardmarket: 278960
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278960,
				tcgplayer: 86892
			}
		},
	],

	retreat: 0
}

export default card
