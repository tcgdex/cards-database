import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Big Charm",
		fr: "Grande Amulette",
		es: "Gran Amuleto",
		it: "Amuleto Grande",
		pt: "Pingente Grande",
		de: "Großes Amulett"
	},

	illustrator: "inose yukie",
	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "The Pokémon this card is attached to gets +30 HP.",
		fr: "Cette carte ajoute 30 PV au Pokémon auquel elle est attachée.",
		es: "El Pokémon al que está unida esta carta obtiene 30 PS más.",
		it: "Il Pokémon a cui è assegnata questa carta ha 30 PS in più.",
		pt: "O Pokémon ao qual esta carta está ligada recebe 30 PS a mais.",
		de: "Das Pokémon, an das diese Karte angelegt ist, erhält +30 KP."
	},

	trainerType: "Tool",
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 457303,
		tcgplayer: 213289
	}
}

export default card