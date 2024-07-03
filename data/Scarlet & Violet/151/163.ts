import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Restes",
		en: "Leftovers",
		es: "Restos",
		it: "Avanzi",
		pt: "Sobras",
		de: "Überreste"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		fr: "À la fin de votre tour, si le Pokémon auquel cette carte est attachée est sur le Poste Actif, soignez 20 dégâts de ce Pokémon.",
		en: "At the end of your turn, if the Pokémon this card is attached to is in the Active Spot, heal 20 damage from it.",
		es: "Al final de tu turno, si el Pokémon al que está unida esta carta está en el Puesto Activo, cúrale 20 puntos de daño.",
		it: "Alla fine del tuo turno, se il Pokémon a cui è assegnata questa carta è in posizione attiva, curalo da 20 danni.",
		pt: "No final do seu turno, se o Pokémon ao qual esta carta está ligada estiver no Campo Ativo, cure 20 pontos de dano dele.",
		de: "Am Ende deines Zuges, wenn das Pokémon, an das diese Karte angelegt ist, in der Aktiven Position ist, heile 20 Schadenspunkte bei jenem Pokémon."
	},

	trainerType: "Tool",
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card