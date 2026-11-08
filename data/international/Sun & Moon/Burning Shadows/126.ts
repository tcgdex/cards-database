import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Weakness Policy",
		'fr-fr': "Vulné-Assurance",
		'es-es': "Seguro Debilidad",
		'it-it': "Vulneropolizza",
		'pt-br': "Política de Fraqueza",
		'de-de': "Schwächenschutz"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Le Pokémon auquel cette carte est attachée n’a pas de Faiblesse.",
		'en-us': "The Pokémon this card is attached to has no Weakness.",
		'es-es': "El Pokémon al que esté unida esta carta no tiene ninguna Debilidad.",
		'it-it': "Il Pokémon a cui è assegnata questa carta non ha debolezza.",
		'pt-br': "O Pokémon ao qual esta carta está ligada não possui Fraqueza.",
		'de-de': "Das Pokémon, an das diese Karte angelegt ist, hat keine Schwäche."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 299526,
		tcgplayer: 138628
	},
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
