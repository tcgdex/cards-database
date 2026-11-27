import { Card } from '../../../interfaces'
import Set from "../Play! Pokémon Prize Pack Series 01"

const card: Card = {
	name: {
		en: "Big Charm",
		fr: "Grande Amulette",
		es: "Gran Amuleto",
		it: "Amuleto Grande",
		pt: "Pingente Grande",
		de: "Großes Amulett"
	},

	illustrator: "inose yukie",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "The Pokémon this card is attached to gets +30 HP.",
		fr: "Cette carte ajoute 30 PV au Pokémon auquel elle est attachée.",
		es: "El Pokémon al que está unida esta carta obtiene 30 PS más.",
		it: "Il Pokémon a cui è assegnata questa carta ha 30 PS in più.",
		pt: "O Pokémon ao qual esta carta está ligada recebe 30 PS a mais.",
		de: "Lege 1 Pokémon-Ausrüstung an 1 deiner Pokémon an, an das noch keine Pokémon-Ausrüstung angelegt ist. Das Pokémon, an das diese Karte angelegt ist, erhält +30 KP. Du kannst während deines Zuges beliebig viele Itemkarten spielen."
	},

	trainerType: "Tool",
	regulationMark: "D",

	variants: [
		{
			type: "normal",
			stamp: ["player-rewards-program"],
		},
	],
}

export default card
