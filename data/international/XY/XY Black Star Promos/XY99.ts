import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Aerodactyl Spirit Link",
		'fr-fr': "Lien Spirituel Ptéra",
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Ptéra-EX.",
		'en-us': "Your turn does not end if the Pokémon this card is attached to becomes M Aerodactyl-EX."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 289819
	}
}

export default card
