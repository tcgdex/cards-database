import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Ultimate Zone",
		fr: "Zone ultime",
		de: "Ultimativ-Zone"
	},

	illustrator: "Yusuke Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.",
		de: "Beliebig oft während seines Zuges kann jeder Spieler 1 Energiekarte von 1 Pokémon auf seiner Bank entfernen und an sein Aktives Arceus anlegen."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278963,
		tcgplayer: 90133
	}
}

export default card
