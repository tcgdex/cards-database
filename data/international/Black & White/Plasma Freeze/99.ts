import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Float Stone",
		'fr-fr': "Pierrallégée",
		'es-es': "Piedra Pómez",
		'it-it': "Pietralieve",
		'pt-br': "Pedra Flutuante",
		'de-de': "Leichtstein"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Le Pokémon auquel cette carte est attachée n'a pas de coût de Retraite.",
		'en-us': "The Pokémon this card is attached to has no Retreat Cost.",
		'es-es': "El Pokémon al que esté unida esta carta no tiene ningún Coste de Retirada.",
		'it-it': "Il Pokémon a cui questa carta è assegnata non ha alcun costo di ritirata.",
		'pt-br': "O Pokémon ao qual este card está ligado não tem Custo para Recuar.",
		'de-de': "Das Pokémon, an das diese Karte angelegt ist, hat keine Rückzugskosten."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 280977,
		tcgplayer: 85510
	}
}

export default card
