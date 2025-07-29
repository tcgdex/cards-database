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
		en: "Attach Lucky Egg to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If\nthat Pokémon is Knocked Out, discard this card.",
		de: "Wenn das Pokémon, an das diese Karte angelegt ist, durch Schaden eines gegnerischen Angriffs kampfunfähig wird, ziehe so viele Karten, bis du 7 Karten auf deiner Hand hast."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 278960
	}
}

export default card
