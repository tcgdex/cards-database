import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Giant Cape",
		fr: "Cape Géante",
		es: "Capa Gigante",
		it: "Mantello Gigante",
		pt: "Capa Gigante",
		de: "Riesige Robe"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte ajoute 20 PV au Pokémon auquel elle est attachée.",
		en: "The Pokémon this card is attached to gets +20 HP.",
		es: "El Pokémon al que esté unida esta carta obtiene 20 PV más.",
		it: "Il Pokémon a cui è assegnata questa carta ha 20 PV in più.",
		pt: "O Pokémon ao qual este card está ligado recebe +20 PS.",
		de: "Das Pokémon, an das diese Karte angelegt ist, erhält +20 KP."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 280553
	}
}

export default card
