import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Float Stone",
		fr: "Pierrallégée",
		es: "Piedra Pómez",
		it: "Pietralieve",
		pt: "Pedra Flutuante",
		de: "Leichtstein"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Le Pokémon auquel cette carte est attachée n'a pas de Coût de Retraite.",
		en: "The Pokémon this card is attached to has no Retreat Cost.",
		es: "El Pokémon al que esté unida esta carta no tiene ningún Coste de Retirada.",
		it: "Il Pokémon a cui questa carta è assegnata non ha alcun costo di ritirata.",
		pt: "O Pokémon ao qual este card está ligado não tem Custo para Recuar.",
		de: "Das Pokémon, an das diese Karte angelegt ist, hat keine Rückzugskosten."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 286383,
		tcgplayer: 107256
	}
}

export default card
