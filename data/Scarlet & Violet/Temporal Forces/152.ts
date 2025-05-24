import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Hero's Cape",
		fr: "Cape Héroïque",
		es: "Capa de Héroes",
		it: "Mantello dell'Eroe",
		pt: "Capa de Herói",
		de: "Heldenumhang"
	},

	rarity: "ACE SPEC Rare",
	category: "Trainer",

	effect: {
		en: "The Pokémon this card is attached to gets +100 HP.",
		fr: "Le Pokémon auquel cette carte est attachée reçoit +100 PV.",
		es: "El Pokémon al que esté unida esta carta obtiene 100 PS más.",
		it: "Il Pokémon a cui è assegnata questa carta ha 100 PS in più.",
		pt: "O Pokémon ao qual esta carta está ligada recebe 100 PS a mais.",
		de: "Das Pokémon, an das diese Karte angelegt ist, erhält +100 KP."
	},

	trainerType: "Tool",
	regulationMark: "H",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "Toyste Beach"
}

export default card